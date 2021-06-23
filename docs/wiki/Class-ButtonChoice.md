[OakAddins/Code/ChoicesManager/Choices/ButtonChoice](../wiki/Module-OakAddins/Code/ChoicesManager/Choices/ButtonChoice).ButtonChoice

## Hierarchy

- [ChoiceButton](../wiki/Class-ChoiceButton)

  ↳ **ButtonChoice**

## Table of contents

### Constructors

- [constructor](../wiki/Class-ButtonChoice#constructor)

### Properties

- [$container](../wiki/Class-ButtonChoice#$container)
- [$eventProvider](../wiki/Class-ButtonChoice#$eventprovider)
- [buildArgs](../wiki/Class-ButtonChoice#buildargs)
- [choiceContainer](../wiki/Class-ButtonChoice#choicecontainer)
- [choicesEnumerator](../wiki/Class-ButtonChoice#choicesenumerator)
- [events](../wiki/Class-ButtonChoice#events)
- [id](../wiki/Class-ButtonChoice#id)
- [type](../wiki/Class-ButtonChoice#type)
- [sizes](../wiki/Class-ButtonChoice#sizes)

### Methods

- [build](../wiki/Class-ButtonChoice#build)
- [click](../wiki/Class-ButtonChoice#click)
- [emit](../wiki/Class-ButtonChoice#emit)
- [isDisplaySize](../wiki/Class-ButtonChoice#isdisplaysize)
- [on](../wiki/Class-ButtonChoice#on)
- [onBuild](../wiki/Class-ButtonChoice#onbuild)
- [onClick](../wiki/Class-ButtonChoice#onclick)
- [once](../wiki/Class-ButtonChoice#once)
- [removeListener](../wiki/Class-ButtonChoice#removelistener)

## Constructors

### constructor

• **new ButtonChoice**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/Choice#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[ChoiceButton](../wiki/Class-ChoiceButton).[constructor](../wiki/Class-ChoiceButton#constructor)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts:9](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts#L9)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[$container](../wiki/Class-ChoiceButton#$container)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLElement`

Le container DOM qui est la source des événements

**`memberof`** Choice

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[$eventProvider](../wiki/Class-ChoiceButton#$eventprovider)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:64](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L64)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[buildArgs](../wiki/Class-ChoiceButton#buildargs)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [ChoiceContainer](../wiki/Class-ChoiceContainer)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[choiceContainer](../wiki/Class-ChoiceButton#choicecontainer)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[choicesEnumerator](../wiki/Class-ChoiceButton#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### events

• **events**: `any`

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[events](../wiki/Class-ChoiceButton#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[id](../wiki/Class-ChoiceButton#id)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[type](../wiki/Class-ChoiceButton#type)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[sizes](../wiki/Class-ChoiceButton#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/UIElement.ts#L25)

## Methods

### build

▸ `Protected` **build**(`buildCallback`): [ChoiceButton](../wiki/Class-ChoiceButton)

Permet de crée le/les élément(s) DOM qui constitue le boutton

**`memberof`** ChoiceButton

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildCallback` | (...`args`: `any`[]) => `HTMLElement` |

#### Returns

[ChoiceButton](../wiki/Class-ChoiceButton)

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[build](../wiki/Class-ChoiceButton#build)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:37](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L37)

___

### click

▸ `Protected` **click**(): `void`

Permet de déclancher l'évenement 'click' sur le bouton

**`memberof`** ChoiceButton

#### Returns

`void`

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[click](../wiki/Class-ChoiceButton#click)

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

[ChoiceButton](../wiki/Class-ChoiceButton).[emit](../wiki/Class-ChoiceButton#emit)

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

[ChoiceButton](../wiki/Class-ChoiceButton).[isDisplaySize](../wiki/Class-ChoiceButton#isdisplaysize)

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

[ChoiceButton](../wiki/Class-ChoiceButton).[on](../wiki/Class-ChoiceButton#on)

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

[ChoiceButton](../wiki/Class-ChoiceButton).[onBuild](../wiki/Class-ChoiceButton#onbuild)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts:22](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts#L22)

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

[ChoiceButton](../wiki/Class-ChoiceButton).[onClick](../wiki/Class-ChoiceButton#onclick)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts:31](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts#L31)

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

[ChoiceButton](../wiki/Class-ChoiceButton).[once](../wiki/Class-ChoiceButton#once)

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

[ChoiceButton](../wiki/Class-ChoiceButton).[removeListener](../wiki/Class-ChoiceButton#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L21)
