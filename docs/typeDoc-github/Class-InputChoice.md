[OakAddins/Code/ChoicesManager/Choices/InputChoice](../wiki/Module-OakAddins/Code/ChoicesManager/Choices/InputChoice).InputChoice

## Hierarchy

- [ChoiceInput](../wiki/Class-ChoiceInput)

  ↳ **InputChoice**

## Table of contents

### Constructors

- [constructor](../wiki/Class-InputChoice#constructor)

### Properties

- [$container](../wiki/Class-InputChoice#$container)
- [$eventProvider](../wiki/Class-InputChoice#$eventprovider)
- [buildArgs](../wiki/Class-InputChoice#buildargs)
- [choiceContainer](../wiki/Class-InputChoice#choicecontainer)
- [choicesEnumerator](../wiki/Class-InputChoice#choicesenumerator)
- [events](../wiki/Class-InputChoice#events)
- [id](../wiki/Class-InputChoice#id)
- [type](../wiki/Class-InputChoice#type)
- [value](../wiki/Class-InputChoice#value)
- [sizes](../wiki/Class-InputChoice#sizes)

### Methods

- [build](../wiki/Class-InputChoice#build)
- [change](../wiki/Class-InputChoice#change)
- [click](../wiki/Class-InputChoice#click)
- [emit](../wiki/Class-InputChoice#emit)
- [isDisplaySize](../wiki/Class-InputChoice#isdisplaysize)
- [on](../wiki/Class-InputChoice#on)
- [onBuild](../wiki/Class-InputChoice#onbuild)
- [onChange](../wiki/Class-InputChoice#onchange)
- [onClick](../wiki/Class-InputChoice#onclick)
- [once](../wiki/Class-InputChoice#once)
- [removeListener](../wiki/Class-InputChoice#removelistener)

## Constructors

### constructor

• **new InputChoice**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/Choice#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[ChoiceInput](../wiki/Class-ChoiceInput).[constructor](../wiki/Class-ChoiceInput#constructor)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:8](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L8)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[$container](../wiki/Class-ChoiceInput#$container)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLInputElement`

Le container DOM qui est la source des événements

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[$eventProvider](../wiki/Class-ChoiceInput#$eventprovider)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:16](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L16)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[buildArgs](../wiki/Class-ChoiceInput#buildargs)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [ChoiceContainer](../wiki/Class-ChoiceContainer)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[choiceContainer](../wiki/Class-ChoiceInput#choicecontainer)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[choicesEnumerator](../wiki/Class-ChoiceInput#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### events

• **events**: `any`

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[events](../wiki/Class-ChoiceInput#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[id](../wiki/Class-ChoiceInput#id)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[type](../wiki/Class-ChoiceInput#type)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### value

• **value**: `string` = ""

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[value](../wiki/Class-ChoiceInput#value)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:15](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L15)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[sizes](../wiki/Class-ChoiceInput#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/UIElement.ts#L25)

## Methods

### build

▸ `Protected` **build**(`buildCallback`): [ChoiceInput](../wiki/Class-ChoiceInput)

Permet de crée le/les élément(s) DOM qui constitue le boutton

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildCallback` | (...`args`: `any`[]) => `HTMLInputElement` |

#### Returns

[ChoiceInput](../wiki/Class-ChoiceInput)

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[build](../wiki/Class-ChoiceInput#build)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L25)

___

### change

▸ `Protected` **change**(`value?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | "" |

#### Returns

`void`

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[change](../wiki/Class-ChoiceInput#change)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L40)

___

### click

▸ `Protected` **click**(): `void`

Permet de déclancher l'évenement 'click' sur le bouton

**`memberof`** ChoiceButton

#### Returns

`void`

#### Inherited from

[ChoiceInput](../wiki/Class-ChoiceInput).[click](../wiki/Class-ChoiceInput#click)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:55](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L55)

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

[ChoiceInput](../wiki/Class-ChoiceInput).[emit](../wiki/Class-ChoiceInput#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L33)

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

[ChoiceInput](../wiki/Class-ChoiceInput).[isDisplaySize](../wiki/Class-ChoiceInput#isdisplaysize)

#### Defined in

[lib/UIElement.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/UIElement.ts#L33)

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

[ChoiceInput](../wiki/Class-ChoiceInput).[on](../wiki/Class-ChoiceInput#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L13)

___

### onBuild

▸ `Protected` **onBuild**(`data`, `choiceData`): `void`

Est appeler lorsque la construction du boutton est déclanché

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.label` | `string` |
| `data.next?` | `string` \| [TreeNode](../wiki/Module-OakAddins/Code/Data/DataParser#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [ChoiceData](../wiki/Module-OakAddins/Code/Data/DataProvider#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](../wiki/Class-ChoiceInput).[onBuild](../wiki/Class-ChoiceInput#onbuild)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L21)

___

### onChange

▸ `Protected` **onChange**(`ev`, `data`, `choiceData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |
| `data` | `Object` |
| `data.label` | `string` |
| `data.next?` | `string` \| [TreeNode](../wiki/Module-OakAddins/Code/Data/DataParser#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [ChoiceData](../wiki/Module-OakAddins/Code/Data/DataProvider#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](../wiki/Class-ChoiceInput).[onChange](../wiki/Class-ChoiceInput#onchange)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L28)

___

### onClick

▸ `Protected` **onClick**(`ev`, `data`, `choiceData`): `void`

Est appeler lorsque l'evenement click est déclanché

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |
| `data` | `Object` |
| `data.label` | `string` |
| `data.next?` | `string` \| [TreeNode](../wiki/Module-OakAddins/Code/Data/DataParser#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [ChoiceData](../wiki/Module-OakAddins/Code/Data/DataProvider#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](../wiki/Class-ChoiceInput).[onClick](../wiki/Class-ChoiceInput#onclick)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L33)

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

[ChoiceInput](../wiki/Class-ChoiceInput).[once](../wiki/Class-ChoiceInput#once)

#### Defined in

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L46)

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

[ChoiceInput](../wiki/Class-ChoiceInput).[removeListener](../wiki/Class-ChoiceInput#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L21)
