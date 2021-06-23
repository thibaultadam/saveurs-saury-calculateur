[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/Data/DataParser](../modules/lib_data_dataparser.md) / DataParser

# Class: DataParser

[lib/Data/DataParser](../modules/lib_data_dataparser.md).DataParser

## Hierarchy

- **DataParser**

  ↳ [DataParser](oakaddins_code_data_dataparser.dataparser.md)

## Table of contents

### Constructors

- [constructor](lib_data_dataparser.dataparser.md#constructor)

### Properties

- [configurator](lib_data_dataparser.dataparser.md#configurator)
- [data](lib_data_dataparser.dataparser.md#data)
- [parsers](lib_data_dataparser.dataparser.md#parsers)

### Methods

- [addDataParser](lib_data_dataparser.dataparser.md#adddataparser)
- [parse](lib_data_dataparser.dataparser.md#parse)

## Constructors

### constructor

• **new DataParser**(`configurator`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurator` | [Configurator](lib_configurator.configurator.md) |
| `data` | [Data](../modules/lib_configurator.md#data) |

#### Defined in

[lib/Data/DataParser.ts:19](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Data/DataParser.ts#L19)

## Properties

### configurator

• **configurator**: [Configurator](lib_configurator.configurator.md)

___

### data

• **data**: [Data](../modules/lib_configurator.md#data)

___

### parsers

• `Protected` **parsers**: `Map`<string, [DataParserCallbackData](../modules/lib_data_dataparser.md#dataparsercallbackdata)\>

#### Defined in

[lib/Data/DataParser.ts:19](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Data/DataParser.ts#L19)

## Methods

### addDataParser

▸ `Protected` **addDataParser**(`dataKey`, `callback`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataKey` | `string` |
| `callback` | [DataParserCallback](../modules/lib_data_dataparser.md#dataparsercallback) |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[lib/Data/DataParser.ts:29](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Data/DataParser.ts#L29)

___

### parse

▸ **parse**(): `Promise`<void\>

#### Returns

`Promise`<void\>

#### Defined in

[lib/Data/DataParser.ts:37](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Data/DataParser.ts#L37)
