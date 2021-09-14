[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/Data/DataProvider](../modules/oakaddins_code_data_dataprovider.md) / DataProvider

# Class: DataProvider

[OakAddins/Code/Data/DataProvider](../modules/oakaddins_code_data_dataprovider.md).DataProvider

## Hierarchy

- [`DataProvider`](lib_dataprovider.dataprovider.md)

  ↳ **`DataProvider`**

## Table of contents

### Constructors

- [constructor](oakaddins_code_data_dataprovider.dataprovider.md#constructor)

### Properties

- [choicesEnumerator](oakaddins_code_data_dataprovider.dataprovider.md#choicesenumerator)
- [choicesManager](oakaddins_code_data_dataprovider.dataprovider.md#choicesmanager)
- [data](oakaddins_code_data_dataprovider.dataprovider.md#data)

### Methods

- [get](oakaddins_code_data_dataprovider.dataprovider.md#get)
- [getChoiceData](oakaddins_code_data_dataprovider.dataprovider.md#getchoicedata)
- [getCurrentNode](oakaddins_code_data_dataprovider.dataprovider.md#getcurrentnode)
- [getNode](oakaddins_code_data_dataprovider.dataprovider.md#getnode)

## Constructors

### constructor

• **new DataProvider**(`choicesManager`)

Le DataProvider est instancier au moment de sont ajout ajout dans le ChoiceManager

#### Parameters

| Name | Type |
| :------ | :------ |
| `choicesManager` | [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md) |

#### Overrides

[DataProvider](lib_dataprovider.dataprovider.md).[constructor](lib_dataprovider.dataprovider.md#constructor)

#### Defined in

[OakAddins/Code/Data/DataProvider.ts:7](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataProvider.ts#L7)

## Properties

### choicesEnumerator

• `Protected` **choicesEnumerator**: [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

#### Inherited from

[DataProvider](lib_dataprovider.dataprovider.md).[choicesEnumerator](lib_dataprovider.dataprovider.md#choicesenumerator)

___

### choicesManager

• **choicesManager**: [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md)

#### Inherited from

[DataProvider](lib_dataprovider.dataprovider.md).[choicesManager](lib_dataprovider.dataprovider.md#choicesmanager)

___

### data

• `Protected` **data**: [`Data`](../modules/lib_configurator.md#data)

#### Inherited from

[DataProvider](lib_dataprovider.dataprovider.md).[data](lib_dataprovider.dataprovider.md#data)

## Methods

### get

▸ **get**(`index`, ...`args`): `any`

**`memberof`** DataProvider

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `string` | provider name |
| `...args` | `any`[] | - |

#### Returns

`any`

#### Inherited from

[DataProvider](lib_dataprovider.dataprovider.md).[get](lib_dataprovider.dataprovider.md#get)

#### Defined in

[lib/DataProvider.ts:55](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/DataProvider.ts#L55)

___

### getChoiceData

▸ **getChoiceData**(`choiceName`): [`ChoiceData`](../modules/oakaddins_code_data_dataparser.md#choicedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `choiceName` | `string` |

#### Returns

[`ChoiceData`](../modules/oakaddins_code_data_dataparser.md#choicedata)

#### Defined in

[OakAddins/Code/Data/DataProvider.ts:14](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataProvider.ts#L14)

___

### getCurrentNode

▸ **getCurrentNode**(): [`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode)

#### Returns

[`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode)

#### Defined in

[OakAddins/Code/Data/DataProvider.ts:47](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataProvider.ts#L47)

___

### getNode

▸ **getNode**(`completedChoices`): [`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `completedChoices` | [`CompletedChoice`](../modules/lib_choicesmanagement_choicesenumerator.md#completedchoice)[] |

#### Returns

[`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode)

#### Defined in

[OakAddins/Code/Data/DataProvider.ts:24](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/Data/DataProvider.ts#L24)
