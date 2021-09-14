[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / OakAddins/Code/Data/DataParser

# Module: OakAddins/Code/Data/DataParser

## Table of contents

### Classes

- [DataParser](../classes/oakaddins_code_data_dataparser.dataparser.md)

### Type aliases

- [ChoiceData](oakaddins_code_data_dataparser.md#choicedata)
- [ChoicesTypes](oakaddins_code_data_dataparser.md#choicestypes)
- [Config](oakaddins_code_data_dataparser.md#config)
- [JsonTypes](oakaddins_code_data_dataparser.md#jsontypes)
- [TreeNode](oakaddins_code_data_dataparser.md#treenode)

## Type aliases

### ChoiceData

Ƭ **ChoiceData**: `Object`

#### Index signature

▪ [index: `string`]: [`JsonTypes`](oakaddins_code_data_dataparser.md#jsontypes)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultValue?` | `string` |
| `description?` | `string` |
| `inputType?` | `string` |
| `params?` | `Object` |
| `parse?` | `Object` |
| `placeholder?` | `string` |
| `title?` | `string` |
| `type` | [`ChoiceType`](oakaddins_code_choicesmanager_choicesmanager.md#choicetype) |

#### Defined in

[OakAddins/Code/Data/DataParser.ts:52](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataParser.ts#L52)

___

### ChoicesTypes

Ƭ **ChoicesTypes**: `Object`

#### Index signature

▪ [index: `string`]: [`ChoiceData`](oakaddins_code_data_dataparser.md#choicedata)

#### Defined in

[OakAddins/Code/Data/DataParser.ts:75](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataParser.ts#L75)

___

### Config

Ƭ **Config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `home` | `Object` |
| `home.contactText` | `string` |
| `home.img` | `Object` |
| `home.img.height` | `number` |
| `home.img.src` | `string` |
| `home.img.width` | `number` |
| `home.mail` | `Object` |
| `home.mail.link` | `string` |
| `home.mail.text` | `string` |
| `home.redirectDelay` | `number` |
| `home.tel` | `Object` |
| `home.tel.link` | `string` |
| `home.tel.text` | `string` |
| `home.text` | `string` |
| `title` | `Object` |
| `title.img` | `Object` |
| `title.img.height` | `number` |
| `title.img.src` | `string` |
| `title.img.width` | `number` |
| `title.text` | `string` |

#### Defined in

[OakAddins/Code/Data/DataParser.ts:9](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataParser.ts#L9)

___

### JsonTypes

Ƭ **JsonTypes**: `any`

#### Defined in

[OakAddins/Code/Data/DataParser.ts:7](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataParser.ts#L7)

___

### TreeNode

Ƭ **TreeNode**: `Object`

#### Index signature

▪ [index: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `next?` | [`TreeNode`](oakaddins_code_data_dataparser.md#treenode) \| `string` |
| `type` | `string` |
| `values` | `Object` |

#### Defined in

[OakAddins/Code/Data/DataParser.ts:38](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataParser.ts#L38)
