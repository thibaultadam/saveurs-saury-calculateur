[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / OakAddins/Code/Data/DataParser

# Module: OakAddins/Code/Data/DataParser

## Table of contents

### Classes

- [DataParser](../classes/oakaddins_code_data_dataparser.dataparser.md)

### Type aliases

- [ChoiceData](oakaddins_code_data_dataparser.md#choicedata)
- [ConfiguratorConfig](oakaddins_code_data_dataparser.md#configuratorconfig)
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

[OakAddins/Code/Data/DataParser.ts:22](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/OakAddins/Code/Data/DataParser.ts#L22)

___

### ConfiguratorConfig

Ƭ **ConfiguratorConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `choices` | `Object` |
| `choices.types` | `Object` |

#### Defined in

[OakAddins/Code/Data/DataParser.ts:45](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/OakAddins/Code/Data/DataParser.ts#L45)

___

### JsonTypes

Ƭ **JsonTypes**: `any`

#### Defined in

[OakAddins/Code/Data/DataParser.ts:7](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/OakAddins/Code/Data/DataParser.ts#L7)

___

### TreeNode

Ƭ **TreeNode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `next?` | [`TreeNode`](oakaddins_code_data_dataparser.md#treenode) \| `string` |
| `type` | `string` |
| `values` | `Object` |

#### Defined in

[OakAddins/Code/Data/DataParser.ts:9](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/OakAddins/Code/Data/DataParser.ts#L9)
