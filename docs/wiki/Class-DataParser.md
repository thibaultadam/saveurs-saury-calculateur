[lib/Data/DataParser](../wiki/Module-lib/Data/DataParser).DataParser

## Hierarchy

- **DataParser**

  ↳ [DataParser](../wiki/Class-DataParser)

## Table of contents

### Constructors

- [constructor](../wiki/Class-DataParser#constructor)

### Properties

- [configurator](../wiki/Class-DataParser#configurator)
- [data](../wiki/Class-DataParser#data)
- [parsers](../wiki/Class-DataParser#parsers)

### Methods

- [addDataParser](../wiki/Class-DataParser#adddataparser)
- [parse](../wiki/Class-DataParser#parse)

## Constructors

### constructor

• **new DataParser**(`configurator`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurator` | [Configurator](../wiki/Class-Configurator) |
| `data` | [Data](../wiki/Module-lib/Configurator#data) |

#### Defined in

[lib/Data/DataParser.ts:19](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Data/DataParser.ts#L19)

## Properties

### configurator

• **configurator**: [Configurator](../wiki/Class-Configurator)

___

### data

• **data**: [Data](../wiki/Module-lib/Configurator#data)

___

### parsers

• `Protected` **parsers**: `Map`<string, [DataParserCallbackData](../wiki/Module-lib/Data/DataParser#dataparsercallbackdata)\>

#### Defined in

[lib/Data/DataParser.ts:19](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Data/DataParser.ts#L19)

## Methods

### addDataParser

▸ `Protected` **addDataParser**(`dataKey`, `callback`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataKey` | `string` |
| `callback` | [DataParserCallback](../wiki/Module-lib/Data/DataParser#dataparsercallback) |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[lib/Data/DataParser.ts:29](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Data/DataParser.ts#L29)

___

### parse

▸ **parse**(): `Promise`<void\>

#### Returns

`Promise`<void\>

#### Defined in

[lib/Data/DataParser.ts:37](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Data/DataParser.ts#L37)
