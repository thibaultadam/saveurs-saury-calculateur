[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/Data/DataParser](../modules/oakaddins_code_data_dataparser.md) / DataParser

# Class: DataParser

[OakAddins/Code/Data/DataParser](../modules/oakaddins_code_data_dataparser.md).DataParser

## Hierarchy

- [`DataParser`](lib_data_dataparser.dataparser.md)

  ↳ **`DataParser`**

## Table of contents

### Constructors

- [constructor](oakaddins_code_data_dataparser.dataparser.md#constructor)

### Properties

- [configurator](oakaddins_code_data_dataparser.dataparser.md#configurator)
- [data](oakaddins_code_data_dataparser.dataparser.md#data)
- [parsers](oakaddins_code_data_dataparser.dataparser.md#parsers)

### Methods

- [addDataParser](oakaddins_code_data_dataparser.dataparser.md#adddataparser)
- [choicesTypesParser](oakaddins_code_data_dataparser.dataparser.md#choicestypesparser)
- [parse](oakaddins_code_data_dataparser.dataparser.md#parse)
- [treeParser](oakaddins_code_data_dataparser.dataparser.md#treeparser)
- [treeParserLoop](oakaddins_code_data_dataparser.dataparser.md#treeparserloop)

## Constructors

### constructor

• **new DataParser**(`configurator`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurator` | [`Configurator`](lib_configurator.configurator.md) |

#### Overrides

[DataParser](lib_data_dataparser.dataparser.md).[constructor](lib_data_dataparser.dataparser.md#constructor)

#### Defined in

[OakAddins/Code/Data/DataParser.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataParser.ts#L80)

## Properties

### configurator

• **configurator**: [`Configurator`](lib_configurator.configurator.md)

#### Inherited from

[DataParser](lib_data_dataparser.dataparser.md).[configurator](lib_data_dataparser.dataparser.md#configurator)

___

### data

• **data**: [`Data`](../modules/lib_configurator.md#data)

#### Inherited from

[DataParser](lib_data_dataparser.dataparser.md).[data](lib_data_dataparser.dataparser.md#data)

___

### parsers

• `Protected` **parsers**: `Map`<`string`, [`DataParserCallbackData`](../modules/lib_data_dataparser.md#dataparsercallbackdata)\>

#### Inherited from

[DataParser](lib_data_dataparser.dataparser.md).[parsers](lib_data_dataparser.dataparser.md#parsers)

#### Defined in

[lib/Data/DataParser.ts:19](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Data/DataParser.ts#L19)

## Methods

### addDataParser

▸ `Protected` **addDataParser**(`dataKey`, `callback`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataKey` | `string` |
| `callback` | [`DataParserCallback`](../modules/lib_data_dataparser.md#dataparsercallback) |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

[DataParser](lib_data_dataparser.dataparser.md).[addDataParser](lib_data_dataparser.dataparser.md#adddataparser)

#### Defined in

[lib/Data/DataParser.ts:29](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Data/DataParser.ts#L29)

___

### choicesTypesParser

▸ `Private` **choicesTypesParser**(`types`): [`ChoicesTypes`](../modules/oakaddins_code_data_dataparser.md#choicestypes)

Parse the choicesTypes adding typeName fields

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | [`ChoicesTypes`](../modules/oakaddins_code_data_dataparser.md#choicestypes) |

#### Returns

[`ChoicesTypes`](../modules/oakaddins_code_data_dataparser.md#choicestypes)

parsedData

#### Defined in

[OakAddins/Code/Data/DataParser.ts:95](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataParser.ts#L95)

___

### parse

▸ **parse**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[DataParser](lib_data_dataparser.dataparser.md).[parse](lib_data_dataparser.dataparser.md#parse)

#### Defined in

[lib/Data/DataParser.ts:37](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Data/DataParser.ts#L37)

___

### treeParser

▸ `Private` **treeParser**(`tree`): `Promise`<[`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode)\>

Parse the tree adding label fields and choices dependancies

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | [`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode) |

#### Returns

`Promise`<[`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode)\>

parsedData

#### Defined in

[OakAddins/Code/Data/DataParser.ts:112](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataParser.ts#L112)

___

### treeParserLoop

▸ `Private` **treeParserLoop**(`current`, `formated`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | [`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode) |
| `formated` | [`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode) |

#### Returns

`Promise`<`void`\>

#### Defined in

[OakAddins/Code/Data/DataParser.ts:120](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataParser.ts#L120)
