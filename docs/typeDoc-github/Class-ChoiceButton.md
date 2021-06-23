[lib/ChoicesManagement/Choices/ChoiceButton](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceButton).ChoiceButton

**`alias`** ChoiceButton

**`abstract`**

## Hierarchy

- [Choice](../wiki/Class-Choice)

  ↳ **ChoiceButton**

  ↳↳ [ChoiceInput](../wiki/Class-ChoiceInput)

  ↳↳ [ButtonChoice](../wiki/Class-ButtonChoice)

  ↳↳ [RadioChoice](../wiki/Class-RadioChoice)

## Table of contents

### Constructors

- [constructor](../wiki/Class-ChoiceButton#constructor)

### Properties

- [$container](../wiki/Class-ChoiceButton#$container)
- [$eventProvider](../wiki/Class-ChoiceButton#$eventprovider)
- [buildArgs](../wiki/Class-ChoiceButton#buildargs)
- [choiceContainer](../wiki/Class-ChoiceButton#choicecontainer)
- [choicesEnumerator](../wiki/Class-ChoiceButton#choicesenumerator)
- [events](../wiki/Class-ChoiceButton#events)
- [id](../wiki/Class-ChoiceButton#id)
- [type](../wiki/Class-ChoiceButton#type)
- [sizes](../wiki/Class-ChoiceButton#sizes)

### Methods

- [build](../wiki/Class-ChoiceButton#build)
- [click](../wiki/Class-ChoiceButton#click)
- [emit](../wiki/Class-ChoiceButton#emit)
- [isDisplaySize](../wiki/Class-ChoiceButton#isdisplaysize)
- [on](../wiki/Class-ChoiceButton#on)
- [onBuild](../wiki/Class-ChoiceButton#onbuild)
- [onClick](../wiki/Class-ChoiceButton#onclick)
- [once](../wiki/Class-ChoiceButton#once)
- [removeListener](../wiki/Class-ChoiceButton#removelistener)

## Constructors

### constructor

• **new ChoiceButton**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/Choice#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[Choice](../wiki/Class-Choice).[constructor](../wiki/Class-Choice#constructor)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:17](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L17)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Inherited from

[Choice](../wiki/Class-Choice).[$container](../wiki/Class-Choice#$container)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLElement`

Le container DOM qui est la source des événements

**`memberof`** Choice

#### Inherited from

[Choice](../wiki/Class-Choice).[$eventProvider](../wiki/Class-Choice#$eventprovider)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:64](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L64)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Inherited from

[Choice](../wiki/Class-Choice).[buildArgs](../wiki/Class-Choice#buildargs)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [ChoiceContainer](../wiki/Class-ChoiceContainer)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Inherited from

[Choice](../wiki/Class-Choice).[choiceContainer](../wiki/Class-Choice#choicecontainer)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Inherited from

[Choice](../wiki/Class-Choice).[choicesEnumerator](../wiki/Class-Choice#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### events

• **events**: `any`

#### Inherited from

[Choice](../wiki/Class-Choice).[events](../wiki/Class-Choice#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Inherited from

[Choice](../wiki/Class-Choice).[id](../wiki/Class-Choice#id)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Inherited from

[Choice](../wiki/Class-Choice).[type](../wiki/Class-Choice#type)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Inherited from

[Choice](../wiki/Class-Choice).[sizes](../wiki/Class-Choice#sizes)

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

#### Overrides

[Choice](../wiki/Class-Choice).[build](../wiki/Class-Choice#build)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:37](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L37)

___

### click

▸ `Protected` **click**(): `void`

Permet de déclancher l'évenement 'click' sur le bouton

**`memberof`** ChoiceButton

#### Returns

`void`

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

[Choice](../wiki/Class-Choice).[emit](../wiki/Class-Choice#emit)

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

[Choice](../wiki/Class-Choice).[isDisplaySize](../wiki/Class-Choice#isdisplaysize)

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

[Choice](../wiki/Class-Choice).[on](../wiki/Class-Choice#on)

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

[Choice](../wiki/Class-Choice).[onBuild](../wiki/Class-Choice#onbuild)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:134](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L134)

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

[Choice](../wiki/Class-Choice).[once](../wiki/Class-Choice#once)

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

[Choice](../wiki/Class-Choice).[removeListener](../wiki/Class-Choice#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L21)
