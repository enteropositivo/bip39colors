# BIP39 Colors

Convert your BIP39 mnemonic to colors and vice versa

Test the tool: [https://enteropositivo.github.io/bip39colors/](https://enteropositivo.github.io/bip39colors/)

## Why BIP39 Colors?

- **BIP39 Compatible:** BIP39Colors follows the BIP39 standard, ensuring compatibility with other BIP39 wallets and tools.
- **Additional Obfuscation:** By representing the mnemonic as colors, BIP39 Colors adds an extra layer of obfuscation. Colors can be found in various sources such as website source code, color palettes used by artists, images, etc., making it less obvious to hackers or thieves.
- **Order Doesn't Matter:** The app allows for random storage of seed components, eliminating the need for the correct positioning. You can shuffle and store the colors in any order, and still recover the original BIP39 mnemonic.
- **Open Source:** BIP39 Colors is a fully open-source project available on [GitHub](https://github.com/EnteroPositivo/bip39Colors). It doesn't rely on any third-party JavaScript library or CSS framework, ensuring transparency and security.
- **Offline Usage:** For enhanced security when dealing with your real mnemonic phrase, it is recommended to download the application and use it offline. You can download a copy from the [GitHub repository](https://github.com/EnteroPositivo/bip39Colors) or use it locally on your device.
- **Libraries Support:** BIP39 Colors provides libraries in both Python and JavaScript

## Usage

To use BIP39 Colors, follow these steps:

1. Download the libraries or HTML/JavaScript application from  [GitHub repository](https://github.com/enteropositivo/bip39colors/tree/main/docs) .
2. Enter your BIP39 mnemonic phrase.
3. Click the "Convert" button to generate the corresponding colors.
4. When needed, you can use the colors to recover the original BIP39 mnemonic.


## BIP39Colors Library Usage

### JavaScript

You can use the library with your browser based project or with NodeJS

```javascript
let mnemonic = 'master milk advice kid insect siege riot arrive alcohol mutual mask stay';

// Convert mnemonic phrase to colors
if(BIP39Colors.fromSeed(mnemonic) ){
    
    console.log(BIP39Colors.colors);
    /* outputs: 
    ['#01AB63', '#225531', '#3E8775', '#613911', '#7C5809', '#98BDC1', '#B8E412', '#E3AFE8']
    */

    console.log(BIP39Colors.colorPalette);
    /* outputs colors sorted as color palette: 
    ['#613911', '#7C5809', '#B8E412', '#225531', '#01AB63', '#3E8775', '#98BDC1', '#E3AFE8']
    */

    console.log(BIP39Colors.wordPositions);
    /* outputs bip39 mnemonic words as their positions inside BIP39 word list : 
    [1094, 1125, 33, 979, 937, 1601, 1490, 101, 49, 1170, 1092, 1704] 
    */

}else{
    // Show current error
    console.log(BIP39Colors.getError());
}


let colors = ['#613911', '#7C5809', '#B8E412', '#225531', '#01AB63', '#3E8775', '#98BDC1', '#E3AFE8'];

if( BIP39Colors.toSeed(colors.join(' ')) ){
    console.log(BIP39Colors.seed);
    /* outputs:
    "master milk advice kid insect siege riot arrive alcohol mutual mask stay"
    */
}else{
    // Show current error
    console.log(BIP39Colors.getError());
}
```

### Python

You can use the library within your python project

```python
from bip39colors import *

# Convert mnemonic phrase to colors
mnemonic = "master milk advice kid insect siege riot arrive alcohol mutual mask stay"

if BIP39Colors.fromSeed(mnemonic):
	print(BIP39Colors.colors)
    # outputs: 
    #['#01AB63', '#225531', '#3E8775', '#613911', '#7C5809', '#98BDC1', '#B8E412', '#E3AFE8']
    
    print(BIP39Colors.colorPalette())
    # outputs colors sorted as color palette: 
    #['#613911', '#7C5809', '#B8E412', '#225531', '#01AB63', '#3E8775', '#98BDC1', '#E3AFE8']
    
    print(BIP39Colors.wordPositions)
    # outputs bip39 mnemonic words as their positions inside BIP39 word list : 
    # [1094, 1125, 33, 979, 937, 1601, 1490, 101, 49, 1170, 1092, 1704] 
    
else:
	print(BIP39Colors.getError())


# Convert back colors to original mnemonic phrase
colors =  ['#613911', '#7C5809', '#B8E412', '#225531', '#01AB63', '#3E8775', '#98BDC1', '#E3AFE8']

if( BIP39Colors.toSeed( ' '.join(str(elemento) for elemento in colors) ) ):
	print(BIP39Colors.seed)
    # outputs: "master milk advice kid insect siege riot arrive alcohol mutual mask stay"

else:
	print(BIP39Colors.getError())

```

### Manual Method

You can decode your BIP39Colors by hand using only a calculator

[Manual method explained here](https://github.com/enteropositivo/bip39colors/tree/main/manual)


## Author
This project is authored by [@EnteroPositivo](https://twitter.com/EnteroPositivo)

## License
![](https://licensebuttons.net/l/by/3.0/88x31.png) 

This project is licensed under the [CC BY License](https://github.com/EnteroPositivo/bip39Colors/blob/main/LICENSE.md)