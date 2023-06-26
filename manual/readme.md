# Manual Method

### BIP39Colors to mnemonic
You don't need any external tool or library to convert from BIP39Colors method to your original BIP39 mnemonic 

| 1- BIP39Colors hex format | 2- Convert to decimal |3- Fill left to 8 digits|
|--|--|--|
| #613911 | 6371601  | **0**6371601 |
| #7C5809 | 8149001 | **0**8149001 |
| #B8E412 | 12117010 | 12117010 |
| #225531 | 2250033 | **0**2250033 |
|#01AB63 |109411 |**00**109411
|#3E8775 |4097909 |**0**4097909
|#98BDC1 |10010049 |10010049
 |#E3AFE8 |14921704 |14921704

.


| 4- Sort from lower to higher  | 5- Remove first 2 digits |
|--|--|
|**00**109411 |109411|
|**02**250033 |250033|
|**04**097909 |097909|
|**06**371601 |371601|
|**08**149001 |149001|
|**10**010049 |010049|
|**12**117010 |117010|
|**14**921704 |921704|



**6- Join all numbers together**

109411250033097909371601149001010049117010921704

**7- For each 4 digit lookup the corresponding word position in BIP39 word list**
[https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt)
|1094 |1125| 0033| 0979| 0937| 1601| 1490|0101 |0049 |1170| 1092| 1704|
|--|--|--|--|--|--|--|--|--|--|--|--|
|master| milk |advice| kid |insect |siege |riot| arrive |alcohol| mutual| mask |stay|
