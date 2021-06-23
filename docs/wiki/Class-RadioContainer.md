[OakAddins/Code/ChoicesManager/Choices/RadioContainer](../wiki/Module-OakAddins/Code/ChoicesManager/Choices/RadioContainer).RadioContainer

## Hierarchy

- [ChoiceContainer](../wiki/Class-ChoiceContainer)

  ↳ **RadioContainer**

## Table of contents

### Constructors

- [constructor](../wiki/Class-RadioContainer#constructor)

### Properties

- [$container](../wiki/Class-RadioContainer#$container)
- [choicesEnumerator](../wiki/Class-RadioContainer#choicesenumerator)
- [choicesManager](../wiki/Class-RadioContainer#choicesmanager)
- [containersBundle](../wiki/Class-RadioContainer#containersbundle)
- [data](../wiki/Class-RadioContainer#data)
- [events](../wiki/Class-RadioContainer#events)
- [id](../wiki/Class-RadioContainer#id)
- [type](../wiki/Class-RadioContainer#type)
- [sizes](../wiki/Class-RadioContainer#sizes)

### Methods

- [createChoice](../wiki/Class-RadioContainer#createchoice)
- [createNewContainer](../wiki/Class-RadioContainer#createnewcontainer)
- [emit](../wiki/Class-RadioContainer#emit)
- [isDisplaySize](../wiki/Class-RadioContainer#isdisplaysize)
- [on](../wiki/Class-RadioContainer#on)
- [once](../wiki/Class-RadioContainer#once)
- [registerChoiceClass](../wiki/Class-RadioContainer#registerchoiceclass)
- [removeListener](../wiki/Class-RadioContainer#removelistener)

## Constructors

### constructor

• **new RadioContainer**(`constructionOptions`, `node`, `choiceData`)

// TODO ChoiceContainer constructor description

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceContainerConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#choicecontainerconstructionoptions) |
| `node` | [TreeNode](../wiki/Module-OakAddins/Code/Data/DataParser#treenode) |
| `choiceData` | [ChoiceData](../wiki/Module-OakAddins/Code/Data/DataProvider#choicedata) |

#### Overrides

[ChoiceContainer](../wiki/Class-ChoiceContainer).[constructor](../wiki/Class-ChoiceContainer#constructor)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/RadioContainer.ts:8](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/OakAddins/Code/ChoicesManager/Choices/RadioContainer.ts#L8)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[$container](../wiki/Class-ChoiceContainer#$container)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:43](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L43)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator)

Référance au ChoiceEnumerator

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[choicesEnumerator](../wiki/Class-ChoiceContainer#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:115](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L115)

___

### choicesManager

• **choicesManager**: [ChoicesManager](../wiki/Class-ChoicesManager)

Référance au ChoiceManager

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[choicesManager](../wiki/Class-ChoiceContainer#choicesmanager)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:107](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L107)

___

### containersBundle

• `Private` **containersBundle**: `HTMLElement`[] = []

// TODO : containersbundle

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[containersBundle](../wiki/Class-ChoiceContainer#containersbundle)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:51](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L51)

___

### data

• **data**: [Data](../wiki/Module-lib/Configurator#data)

Contien la référance vers les données du configurateur

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[data](../wiki/Class-ChoiceContainer#data)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:83](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L83)

___

### events

• **events**: `any`

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[events](../wiki/Class-ChoiceContainer#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifiant unique corespondant a la position du choix dans le ChoiceEnumerator

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[id](../wiki/Class-ChoiceContainer#id)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:99](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L99)

___

### type

• **type**: `string`

Contiens la string du type de container

**`memberof`** ChoiceContainer

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[type](../wiki/Class-ChoiceContainer#type)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:91](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L91)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[sizes](../wiki/Class-ChoiceContainer#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/UIElement.ts#L25)

## Methods

### createChoice

▸ `Protected` **createChoice**(...`args`): [Choice](../wiki/Class-Choice)

//TODO : createButton description

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[Choice](../wiki/Class-Choice)

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[createChoice](../wiki/Class-ChoiceContainer#createchoice)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:177](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L177)

___

### createNewContainer

▸ **createNewContainer**(`creationCallback`): `void`

// TODO createNewContainer description

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `creationCallback` | [ContainerCreationCallback](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#containercreationcallback) |

#### Returns

`void`

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[createNewContainer](../wiki/Class-ChoiceContainer#createnewcontainer)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:152](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L152)

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

[ChoiceContainer](../wiki/Class-ChoiceContainer).[emit](../wiki/Class-ChoiceContainer#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L33)

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

[ChoiceContainer](../wiki/Class-ChoiceContainer).[isDisplaySize](../wiki/Class-ChoiceContainer#isdisplaysize)

#### Defined in

[lib/UIElement.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/UIElement.ts#L33)

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

[ChoiceContainer](../wiki/Class-ChoiceContainer).[on](../wiki/Class-ChoiceContainer#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L13)

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

[ChoiceContainer](../wiki/Class-ChoiceContainer).[once](../wiki/Class-ChoiceContainer#once)

#### Defined in

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L46)

___

### registerChoiceClass

▸ `Protected` **registerChoiceClass**(`ChoiceClass`): `void`

//TODO : createButton registerButtonClass

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `ChoiceClass` | [ChoiceConstructor](../wiki/Module-lib/ChoicesManagement/Choices/Choice#choiceconstructor) |

#### Returns

`void`

#### Inherited from

[ChoiceContainer](../wiki/Class-ChoiceContainer).[registerChoiceClass](../wiki/Class-ChoiceContainer#registerchoiceclass)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:199](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L199)

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

[ChoiceContainer](../wiki/Class-ChoiceContainer).[removeListener](../wiki/Class-ChoiceContainer#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L21)
