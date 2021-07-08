[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/ChoicesManagement/Choices/Choice](../modules/lib_choicesmanagement_choices_choice.md) / Choice

# Class: Choice

[lib/ChoicesManagement/Choices/Choice](../modules/lib_choicesmanagement_choices_choice.md).Choice

**`alias`** Choice

**`abstract`**

## Hierarchy

- [`UIElement`](lib_uielement.uielement.md)

  ↳ **`Choice`**

  ↳↳ [`ChoiceButton`](lib_choicesmanagement_choices_choicebutton.choicebutton.md)

## Table of contents

### Constructors

- [constructor](lib_choicesmanagement_choices_choice.choice.md#constructor)

### Properties

- [$container](lib_choicesmanagement_choices_choice.choice.md#$container)
- [$eventProvider](lib_choicesmanagement_choices_choice.choice.md#$eventprovider)
- [buildArgs](lib_choicesmanagement_choices_choice.choice.md#buildargs)
- [choiceContainer](lib_choicesmanagement_choices_choice.choice.md#choicecontainer)
- [choicesEnumerator](lib_choicesmanagement_choices_choice.choice.md#choicesenumerator)
- [events](lib_choicesmanagement_choices_choice.choice.md#events)
- [id](lib_choicesmanagement_choices_choice.choice.md#id)
- [type](lib_choicesmanagement_choices_choice.choice.md#type)
- [sizes](lib_choicesmanagement_choices_choice.choice.md#sizes)

### Methods

- [build](lib_choicesmanagement_choices_choice.choice.md#build)
- [delete](lib_choicesmanagement_choices_choice.choice.md#delete)
- [emit](lib_choicesmanagement_choices_choice.choice.md#emit)
- [isDisplaySize](lib_choicesmanagement_choices_choice.choice.md#isdisplaysize)
- [on](lib_choicesmanagement_choices_choice.choice.md#on)
- [onBuild](lib_choicesmanagement_choices_choice.choice.md#onbuild)
- [onBuilt](lib_choicesmanagement_choices_choice.choice.md#onbuilt)
- [once](lib_choicesmanagement_choices_choice.choice.md#once)
- [removeListener](lib_choicesmanagement_choices_choice.choice.md#removelistener)

## Constructors

### constructor

• **new Choice**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [`ChoiceConstructionOptions`](../modules/lib_choicesmanagement_choices_choice.md#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[UIElement](lib_uielement.uielement.md).[constructor](lib_uielement.uielement.md#constructor)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLElement`

Le container DOM qui est la source des événements

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:64](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L64)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [`ChoiceContainer`](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choicesEnumerator

• **choicesEnumerator**: [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### events

• **events**: `any`

#### Inherited from

[UIElement](lib_uielement.uielement.md).[events](lib_uielement.uielement.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### sizes

▪ `Static` **sizes**: `Map`<`string`, `number`\>

**`static`**

#### Inherited from

[UIElement](lib_uielement.uielement.md).[sizes](lib_uielement.uielement.md#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/UIElement.ts#L25)

## Methods

### build

▸ `Protected` **build**(`buildCallback`): [`Choice`](lib_choicesmanagement_choices_choice.choice.md)

Permet de crée le/les élément(s) DOM qui constitue le boutton

**`memberof`** Choice

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildCallback` | (...`args`: `any`[]) => `HTMLElement` |

#### Returns

[`Choice`](lib_choicesmanagement_choices_choice.choice.md)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:109](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L109)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:154](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L154)

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

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/Tools/EventEmitter.ts#L33)

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

[lib/UIElement.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/UIElement.ts#L33)

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

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/Tools/EventEmitter.ts#L13)

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

[lib/ChoicesManagement/Choices/Choice.ts:136](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L136)

___

### onBuilt

▸ `Protected` `Abstract` **onBuilt**(...`args`): `void`

Est appelé lorsque la construction du boutton et de son container est completement fini dans les couches plus haute des appels (choiceManager)

**`abstract`**

**`example`**
onBuilt()
{
 this.choiceEnumerator.next('value');
}

**`memberof`** ChoiceButton

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:151](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L151)

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

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/Tools/EventEmitter.ts#L46)

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

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/Tools/EventEmitter.ts#L21)
