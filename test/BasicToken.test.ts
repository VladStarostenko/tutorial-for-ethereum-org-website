import {expect, use} from 'chai';
import {Contract} from 'ethers';
import {deployContract, MockProvider, solidity} from 'ethereum-waffle';
import BasicToken from '../build/BasicToken.json';

use(solidity);

describe('BasicToken', () => {
  const [wallet, walletTo] = new MockProvider().getWallets();
  let token: Contract;

  beforeEach(async () => {
    token = await deployContract(wallet, BasicToken, [1000]);
  });

  it('Assigns initial balance', async () => {
    expect(await token.balanceOf(wallet.address)).to.equal(1000);
  });

  it('Transfer emits event', async () => {
    await expect(token.transfer(walletTo.address, 7))
      .to.emit(token, 'Transfer')
      .withArgs(wallet.address, walletTo.address, 7);
  });

  it('Can not transfer above the amount', async () => {
    await expect(token.transfer(walletTo.address, 1007))
      .to.be.revertedWith('VM Exception while processing transaction: revert ERC20: transfer amount exceeds balance');
  });

  it('Send transaction changes receiver balance', async () => {
    await expect(() => wallet.sendTransaction({to: walletTo.address, gasPrice: 0, value: 200}))
      .to.changeBalance(walletTo, 200);
  });

  it('Send transaction changes sender and receiver balances', async () => {
    await expect(() =>  wallet.sendTransaction({to: walletTo.address, gasPrice: 0, value: 200}))
      .to.changeBalances([wallet, walletTo], [-200, 200]);
  });
});
