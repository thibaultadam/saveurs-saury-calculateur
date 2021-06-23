[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/ChoicesManager/Choices/RadioContainer](../modules/oakaddins_code_choicesmanager_choices_radiocontainer.md) / RadioContainer

# Class: RadioContainer

[OakAddins/Code/ChoicesManager/Choices/RadioContainer](../modules/oakaddins_code_choicesmanager_choices_radiocontainer.md).RadioContainer

## Hierarchy

- [ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

  ↳ **RadioContainer**

## Table of contents

### Constructors

- [constructor](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#constructor)

### Properties

- [$container](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#$container)
- [choicesEnumerator](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#choicesenumerator)
- [choicesManager](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#choicesmanager)
- [containersBundle](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#containersbundle)
- [data](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#data)
- [events](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#events)
- [id](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#id)
- [type](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#type)
- [sizes](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#sizes)

### Methods

- [createChoice](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#createchoice)
- [createNewContainer](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#createnewcontainer)
- [emit](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#emit)
- [isDisplaySize](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#isdisplaysize)
- [on](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#on)
- [once](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#once)
- [registerChoiceClass](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#registerchoiceclass)
- [removeListener](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md#removelistener)

## Constructors

### constructor

• **new RadioContainer**(`constructionOptions`, `node`, `choiceData`)

// TODO ChoiceContainer constructor description

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceContainerConstructionOptions](../modules/lib_choicesmanagement_choices_choicecontainer.md#choicecontainerconstructionoptions) |
| `node` | [TreeNode](../modules/oakaddins_code_data_dataparser.md#treenode) |
| `choiceData` | [ChoiceData](../modules/oakaddins_code_data_dataprovider.md#choicedata) |

#### Overrides

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[constructor](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#constructor)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/RadioContainer.ts:8](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/OakAddins/Code/ChoicesManager/Choices/RadioContainer.ts#L8)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[$container](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#$container)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:43](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L43)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

Référance au ChoiceEnumerator

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[choicesEnumerator](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:115](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L115)

___

### choicesManager

• **choicesManager**: [ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md)

Référance au ChoiceManager

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[choicesManager](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#choicesmanager)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:107](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L107)

___

### containersBundle

• `Private` **containersBundle**: `HTMLElement`[] = []

// TODO : containersbundle

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[containersBundle](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#containersbundle)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:51](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L51)

___

### data

• **data**: [Data](../modules/lib_configurator.md#data)

Contien la référance vers les données du configurateur

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[data](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#data)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:83](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L83)

___

### events

• **events**: `any`

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[events](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifiant unique corespondant a la position du choix dans le ChoiceEnumerator

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[id](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#id)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:99](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L99)

___

### type

• **type**: `string`

Contiens la string du type de container

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[type](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#type)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:91](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L91)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[sizes](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/UIElement.ts#L25)

## Methods

### createChoice

▸ `Protected` **createChoice**(...`args`): [Choice](lib_choicesmanagement_choices_choice.choice.md)

//TODO : createButton description

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[Choice](lib_choicesmanagement_choices_choice.choice.md)

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[createChoice](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#createchoice)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:177](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L177)

___

### createNewContainer

▸ **createNewContainer**(`creationCallback`): `void`

// TODO createNewContainer description

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `creationCallback` | [ContainerCreationCallback](../modules/lib_choicesmanagement_choices_choicecontainer.md#containercreationcallback) |

#### Returns

`void`

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[createNewContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#createnewcontainer)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:152](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L152)

___

### emit

▸ **emit**(`event`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[emit](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L33)

___

### isDisplaySize

▸ `Protected` **isDisplaySize**(`sizeKey`): `boolean`

**`memberof`** UIElement

#### Parameters

| Name | Type |
| :------ | :------ |
| `sizeKey` | `string` |

#### Returns

`boolean`

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[isDisplaySize](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#isdisplaysize)

#### Defined in

[lib/UIElement.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/UIElement.ts#L33)

___

### on

▸ **on**(`event`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |
| `listener` | `any` |

#### Returns

`void`

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[on](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L13)

___

### once

▸ **once**(`event`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |
| `listener` | `any` |

#### Returns

`void`

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[once](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#once)

#### Defined in

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L46)

___

### registerChoiceClass

▸ `Protected` **registerChoiceClass**(`ChoiceClass`): `void`

//TODO : createButton registerButtonClass

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `ChoiceClass` | [ChoiceConstructor](../modules/lib_choicesmanagement_choices_choice.md#choiceconstructor) |

#### Returns

`void`

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[registerChoiceClass](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#registerchoiceclass)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:199](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L199)

___

### removeListener

▸ **removeListener**(`event`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |
| `listener` | `any` |

#### Returns

`void`

#### Inherited from

[ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md).[removeListener](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L21)
