[lib/ChoicesManagement/Choices/ChoiceContainer](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer).ChoiceContainer

Class abstraite des conteneurs de choix

**`alias`** ChoiceContainer

**`abstract`**

## Hierarchy

- [UIElement](../wiki/Class-UIElement)

  ↳ **ChoiceContainer**

  ↳↳ [ButtonContainer](../wiki/Class-ButtonContainer)

  ↳↳ [InputContainer](../wiki/Class-InputContainer)

  ↳↳ [RadioContainer](../wiki/Class-RadioContainer)

## Table of contents

### Constructors

- [constructor](../wiki/Class-ChoiceContainer#constructor)

### Properties

- [$container](../wiki/Class-ChoiceContainer#$container)
- [ChoiceClass](../wiki/Class-ChoiceContainer#choiceclass)
- [buildArgs](../wiki/Class-ChoiceContainer#buildargs)
- [buttons](../wiki/Class-ChoiceContainer#buttons)
- [choicesEnumerator](../wiki/Class-ChoiceContainer#choicesenumerator)
- [choicesManager](../wiki/Class-ChoiceContainer#choicesmanager)
- [containersBundle](../wiki/Class-ChoiceContainer#containersbundle)
- [data](../wiki/Class-ChoiceContainer#data)
- [events](../wiki/Class-ChoiceContainer#events)
- [id](../wiki/Class-ChoiceContainer#id)
- [type](../wiki/Class-ChoiceContainer#type)
- [sizes](../wiki/Class-ChoiceContainer#sizes)

### Methods

- [createChoice](../wiki/Class-ChoiceContainer#createchoice)
- [createNewContainer](../wiki/Class-ChoiceContainer#createnewcontainer)
- [emit](../wiki/Class-ChoiceContainer#emit)
- [isDisplaySize](../wiki/Class-ChoiceContainer#isdisplaysize)
- [on](../wiki/Class-ChoiceContainer#on)
- [once](../wiki/Class-ChoiceContainer#once)
- [registerChoiceClass](../wiki/Class-ChoiceContainer#registerchoiceclass)
- [removeListener](../wiki/Class-ChoiceContainer#removelistener)

## Constructors

### constructor

• **new ChoiceContainer**(`constructionOptions`, ...`buildArgs`)

// TODO ChoiceContainer constructor description

**`memberof`** ChoiceContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceContainerConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#choicecontainerconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[UIElement](../wiki/Class-UIElement).[constructor](../wiki/Class-UIElement#constructor)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:115](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L115)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:43](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L43)

___

### ChoiceClass

• `Private` **ChoiceClass**: [ChoiceConstructor](../wiki/Module-lib/ChoicesManagement/Choices/Choice#choiceconstructor)

Contiens la class constructrice des boutons de ce container

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:75](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L75)

___

### buildArgs

• `Private` **buildArgs**: `any`[]

Contiens les arguments de construction des boutons

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:59](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L59)

___

### buttons

• `Private` **buttons**: [Choice](../wiki/Class-Choice)[] = []

Contiens les instances de boutons de ce container

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:67](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L67)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator)

Référance au ChoiceEnumerator

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:115](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L115)

___

### choicesManager

• **choicesManager**: [ChoicesManager](../wiki/Class-ChoicesManager)

Référance au ChoiceManager

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:107](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L107)

___

### containersBundle

• `Private` **containersBundle**: `HTMLElement`[] = []

// TODO : containersbundle

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:51](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L51)

___

### data

• **data**: [Data](../wiki/Module-lib/Configurator#data)

Contien la référance vers les données du configurateur

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:83](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L83)

___

### events

• **events**: `any`

#### Inherited from

[UIElement](../wiki/Class-UIElement).[events](../wiki/Class-UIElement#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifiant unique corespondant a la position du choix dans le ChoiceEnumerator

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:99](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L99)

___

### type

• **type**: `string`

Contiens la string du type de container

**`memberof`** ChoiceContainer

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:91](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L91)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Inherited from

[UIElement](../wiki/Class-UIElement).[sizes](../wiki/Class-UIElement#sizes)

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

[UIElement](../wiki/Class-UIElement).[emit](../wiki/Class-UIElement#emit)

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

[UIElement](../wiki/Class-UIElement).[isDisplaySize](../wiki/Class-UIElement#isdisplaysize)

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

[UIElement](../wiki/Class-UIElement).[on](../wiki/Class-UIElement#on)

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

[UIElement](../wiki/Class-UIElement).[once](../wiki/Class-UIElement#once)

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

[UIElement](../wiki/Class-UIElement).[removeListener](../wiki/Class-UIElement#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L21)
