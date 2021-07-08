[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/ChoicesManagement/Choices/ChoiceContainer](../modules/lib_choicesmanagement_choices_choicecontainer.md) / ChoiceContainer

# Class: ChoiceContainer

[lib/ChoicesManagement/Choices/ChoiceContainer](../modules/lib_choicesmanagement_choices_choicecontainer.md).ChoiceContainer

Class abstraite des conteneurs de choix

**`alias`** ChoiceContainer

**`abstract`**

## Hierarchy

- [`UIElement`](lib_uielement.uielement.md)

  ↳ **`ChoiceContainer`**

  ↳↳ [`ButtonContainer`](oakaddins_code_choicesmanager_choices_buttoncontainer.buttoncontainer.md)

  ↳↳ [`InputContainer`](oakaddins_code_choicesmanager_choices_inputcontainer.inputcontainer.md)

  ↳↳ [`RadioContainer`](oakaddins_code_choicesmanager_choices_radiocontainer.radiocontainer.md)

## Table of contents

### Constructors

- [constructor](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#constructor)

### Properties

- [$container](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#$container)
- [$containersBundle](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#$containersbundle)
- [ChoiceClass](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#choiceclass)
- [buildArgs](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#buildargs)
- [choices](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#choices)
- [choicesEnumerator](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#choicesenumerator)
- [choicesManager](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#choicesmanager)
- [data](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#data)
- [events](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#events)
- [id](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#id)
- [type](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#type)
- [sizes](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#sizes)

### Methods

- [createChoice](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#createchoice)
- [createNewContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#createnewcontainer)
- [delete](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#delete)
- [emit](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#emit)
- [isDisplaySize](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#isdisplaysize)
- [on](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#on)
- [onBuilt](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#onbuilt)
- [once](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#once)
- [registerChoiceClass](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#registerchoiceclass)
- [removeListener](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md#removelistener)

## Constructors

### constructor

• **new ChoiceContainer**(`constructionOptions`, ...`buildArgs`)

// TODO ChoiceContainer constructor description

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [`ChoiceContainerConstructionOptions`](../modules/lib_choicesmanagement_choices_choicecontainer.md#choicecontainerconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[UIElement](lib_uielement.uielement.md).[constructor](lib_uielement.uielement.md#constructor)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:115](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L115)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:43](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L43)

___

### $containersBundle

• `Private` **$containersBundle**: `HTMLElement`[] = `[]`

// TODO : containersbundle

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:51](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L51)

___

### ChoiceClass

• `Private` **ChoiceClass**: [`ChoiceConstructor`](../modules/lib_choicesmanagement_choices_choice.md#choiceconstructor)

Contiens la class constructrice des boutons de ce container

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:75](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L75)

___

### buildArgs

• `Private` **buildArgs**: `any`[]

Contiens les arguments de construction des boutons

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:59](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L59)

___

### choices

• `Private` **choices**: [`Choice`](lib_choicesmanagement_choices_choice.choice.md)[] = `[]`

Contiens les instances de boutons de ce container

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:67](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L67)

___

### choicesEnumerator

• **choicesEnumerator**: [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

Référance au ChoiceEnumerator

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:115](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L115)

___

### choicesManager

• **choicesManager**: [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md)

Référance au ChoiceManager

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:107](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L107)

___

### data

• **data**: [`Data`](../modules/lib_configurator.md#data)

Contien la référance vers les données du configurateur

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:83](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L83)

___

### events

• **events**: `any`

#### Inherited from

[UIElement](lib_uielement.uielement.md).[events](lib_uielement.uielement.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifiant unique corespondant a la position du choix dans le ChoiceEnumerator

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:99](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L99)

___

### type

• **type**: `string`

Contiens la string du type de container

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:91](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L91)

___

### sizes

▪ `Static` **sizes**: `Map`<`string`, `number`\>

**`static`**

#### Inherited from

[UIElement](lib_uielement.uielement.md).[sizes](lib_uielement.uielement.md#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/UIElement.ts#L25)

## Methods

### createChoice

▸ `Protected` **createChoice**(...`args`): [`Choice`](lib_choicesmanagement_choices_choice.choice.md)

//TODO : createButton description

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Choice`](lib_choicesmanagement_choices_choice.choice.md)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:177](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L177)

___

### createNewContainer

▸ **createNewContainer**(`creationCallback`): `void`

// TODO createNewContainer description

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `creationCallback` | [`ContainerCreationCallback`](../modules/lib_choicesmanagement_choices_choicecontainer.md#containercreationcallback) |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:152](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L152)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:220](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L220)

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

[UIElement](lib_uielement.uielement.md).[emit](lib_uielement.uielement.md#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/Tools/EventEmitter.ts#L33)

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

[UIElement](lib_uielement.uielement.md).[isDisplaySize](lib_uielement.uielement.md#isdisplaysize)

#### Defined in

[lib/UIElement.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/UIElement.ts#L33)

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

[UIElement](lib_uielement.uielement.md).[on](lib_uielement.uielement.md#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/Tools/EventEmitter.ts#L13)

___

### onBuilt

▸ `Protected` `Abstract` **onBuilt**(): `void`

Appelé lorsque le choix est completement crée dans les couches les plus hautes

**`memberof`** ChoiceContainer

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:217](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L217)

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

[UIElement](lib_uielement.uielement.md).[once](lib_uielement.uielement.md#once)

#### Defined in

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/Tools/EventEmitter.ts#L46)

___

### registerChoiceClass

▸ `Protected` **registerChoiceClass**(`ChoiceClass`): `void`

Définit la class qui sera construite lors de la création de chaqu'un des element du choi, les déférentes instances de cette class servent comme émeteur d'evenement pour paser d'un choix a un autre

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `ChoiceClass` | [`ChoiceConstructor`](../modules/lib_choicesmanagement_choices_choice.md#choiceconstructor) |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:205](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L205)

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

[UIElement](lib_uielement.uielement.md).[removeListener](lib_uielement.uielement.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/Tools/EventEmitter.ts#L21)
