[lib/ChoicesManagement/Choices/ChoiceInput](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceInput).ChoiceInput

## Hierarchy

- [ChoiceButton](../wiki/Class-ChoiceButton)

  ↳ **ChoiceInput**

  ↳↳ [InputChoice](../wiki/Class-InputChoice)

## Table of contents

### Constructors

- [constructor](../wiki/Class-ChoiceInput#constructor)

### Properties

- [$container](../wiki/Class-ChoiceInput#$container)
- [$eventProvider](../wiki/Class-ChoiceInput#$eventprovider)
- [buildArgs](../wiki/Class-ChoiceInput#buildargs)
- [choiceContainer](../wiki/Class-ChoiceInput#choicecontainer)
- [choicesEnumerator](../wiki/Class-ChoiceInput#choicesenumerator)
- [events](../wiki/Class-ChoiceInput#events)
- [id](../wiki/Class-ChoiceInput#id)
- [type](../wiki/Class-ChoiceInput#type)
- [value](../wiki/Class-ChoiceInput#value)
- [sizes](../wiki/Class-ChoiceInput#sizes)

### Methods

- [build](../wiki/Class-ChoiceInput#build)
- [change](../wiki/Class-ChoiceInput#change)
- [click](../wiki/Class-ChoiceInput#click)
- [emit](../wiki/Class-ChoiceInput#emit)
- [isDisplaySize](../wiki/Class-ChoiceInput#isdisplaysize)
- [on](../wiki/Class-ChoiceInput#on)
- [onBuild](../wiki/Class-ChoiceInput#onbuild)
- [onChange](../wiki/Class-ChoiceInput#onchange)
- [onClick](../wiki/Class-ChoiceInput#onclick)
- [once](../wiki/Class-ChoiceInput#once)
- [removeListener](../wiki/Class-ChoiceInput#removelistener)

## Constructors

### constructor

• **new ChoiceInput**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/Choice#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[ChoiceButton](../wiki/Class-ChoiceButton).[constructor](../wiki/Class-ChoiceButton#constructor)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:16](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L16)

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

• **$eventProvider**: `HTMLInputElement`

Le container DOM qui est la source des événements

#### Overrides

[ChoiceButton](../wiki/Class-ChoiceButton).[$eventProvider](../wiki/Class-ChoiceButton#$eventprovider)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:16](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L16)

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

### value

• **value**: `string` = ""

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:15](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L15)

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

▸ `Protected` **build**(`buildCallback`): [ChoiceInput](../wiki/Class-ChoiceInput)

Permet de crée le/les élément(s) DOM qui constitue le boutton

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildCallback` | (...`args`: `any`[]) => `HTMLInputElement` |

#### Returns

[ChoiceInput](../wiki/Class-ChoiceInput)

#### Overrides

[ChoiceButton](../wiki/Class-ChoiceButton).[build](../wiki/Class-ChoiceButton#build)

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

▸ `Protected` `Abstract` **onBuild**(...`args`): `void`

Est appeler lorsque la construction du boutton est déclanché

**`abstract`**

**`example`**
onBuild()
{
 this.buildButton(() => document.createElement('div'));
}

**`memberof`** ChoiceButton

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[onBuild](../wiki/Class-ChoiceButton#onbuild)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:134](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L134)

___

### onChange

▸ `Protected` `Abstract` **onChange**(`ev`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L46)

___

### onClick

▸ `Protected` `Abstract` **onClick**(`ev`, ...`args`): `void`

Est appeler lorsque l'evenement click est déclanché

**`abstract`**

**`memberof`** ChoiceButton

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[ChoiceButton](../wiki/Class-ChoiceButton).[onClick](../wiki/Class-ChoiceButton#onclick)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:68](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L68)

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
