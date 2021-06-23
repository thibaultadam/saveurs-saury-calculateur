[lib/ChoicesManagement/Choices/Choice](../wiki/Module-lib/ChoicesManagement/Choices/Choice).Choice

**`alias`** Choice

**`abstract`**

## Hierarchy

- [UIElement](../wiki/Class-UIElement)

  ↳ **Choice**

  ↳↳ [ChoiceButton](../wiki/Class-ChoiceButton)

## Table of contents

### Constructors

- [constructor](../wiki/Class-Choice#constructor)

### Properties

- [$container](../wiki/Class-Choice#$container)
- [$eventProvider](../wiki/Class-Choice#$eventprovider)
- [buildArgs](../wiki/Class-Choice#buildargs)
- [choiceContainer](../wiki/Class-Choice#choicecontainer)
- [choicesEnumerator](../wiki/Class-Choice#choicesenumerator)
- [events](../wiki/Class-Choice#events)
- [id](../wiki/Class-Choice#id)
- [type](../wiki/Class-Choice#type)
- [sizes](../wiki/Class-Choice#sizes)

### Methods

- [build](../wiki/Class-Choice#build)
- [emit](../wiki/Class-Choice#emit)
- [isDisplaySize](../wiki/Class-Choice#isdisplaysize)
- [on](../wiki/Class-Choice#on)
- [onBuild](../wiki/Class-Choice#onbuild)
- [once](../wiki/Class-Choice#once)
- [removeListener](../wiki/Class-Choice#removelistener)

## Constructors

### constructor

• **new Choice**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/Choice#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[UIElement](../wiki/Class-UIElement).[constructor](../wiki/Class-UIElement#constructor)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLElement`

Le container DOM qui est la source des événements

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:64](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L64)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [ChoiceContainer](../wiki/Class-ChoiceContainer)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### events

• **events**: `any`

#### Inherited from

[UIElement](../wiki/Class-UIElement).[events](../wiki/Class-UIElement#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Inherited from

[UIElement](../wiki/Class-UIElement).[sizes](../wiki/Class-UIElement#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/UIElement.ts#L25)

## Methods

### build

▸ `Protected` **build**(`buildCallback`): [Choice](../wiki/Class-Choice)

Permet de crée le/les élément(s) DOM qui constitue le boutton

**`memberof`** Choice

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildCallback` | (...`args`: `any`[]) => `HTMLElement` |

#### Returns

[Choice](../wiki/Class-Choice)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:109](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L109)

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

[UIElement](../wiki/Class-UIElement).[isDisplaySize](../wiki/Class-UIElement#isdisplaysize)

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

[UIElement](../wiki/Class-UIElement).[on](../wiki/Class-UIElement#on)

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

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:134](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L134)

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

[UIElement](../wiki/Class-UIElement).[removeListener](../wiki/Class-UIElement#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L21)
