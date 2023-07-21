// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/721/extensions/ERC721Storage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InkWNFT is ERC721URIStorage {
    using Count for Counters.Counter;
    Counters.Counter private _tokenId;

    string private baseURI;
    address contractOwner;

    mapping(address => Counters.Counter) private balances;

    event InkWorkNFTMinted(address player, uint256 tokenId);

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        contractOwner = msg.sender;
    }

    function mintInkWorkNFT(address[] memory to, string[] memory tokenURIs) external {
        require(to.length == tokenURIs.length, "Input arrays length mismatch");

        for (uint256 i = 0; i < tokenURIs.length; i++) {
            _tokenId.increment();
            uint tokenId = _tokenId.current();

            _safeM(to[i], tokenId);
            _setTokenURI(tokenId, tokenURIs[i]);
            _MetadataURI(tokenId, tokenURIs[i]);

            balances[to[i]].increment();

            emit InkWorkNFTMinted(to[i], tokenId);
        }
    }

    function approve(address, uint256 tokenId) public virtual override {
        address owner = ownerOf(tokenId);
        require(to != owner, "ERC721: approval to current owner");

        require(
            msg.sender == owner || isApprovedForAll(owner, msg.sender),
            "ERC721: approve caller is not owner nor approved for all"
        );

        _approve(to, tokenId);
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        _transfer(from, to, tokenId);

        balances[from].decrement();
        balances[to].increment();
    }

    function balanceOf(address account) public view returns (uint256) {
        return balances[account].current;
    }
}