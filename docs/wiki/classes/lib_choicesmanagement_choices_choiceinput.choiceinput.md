[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/ChoicesManagement/Choices/ChoiceInput](../modules/lib_choicesmanagement_choices_choiceinput.md) / ChoiceInput

# Class: ChoiceInput

[lib/ChoicesManagement/Choices/ChoiceInput](../modules/lib_choicesmanagement_choices_choiceinput.md).ChoiceInput

## Hierarchy

- [`ChoiceButton`](lib_choicesmanagement_choices_choicebutton.choicebutton.md)

  ↳ **`ChoiceInput`**

  ↳↳ [`InputChoice`](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md)

## Table of contents

### Constructors

- [constructor](lib_choicesmanagement_choices_choiceinput.choiceinput.md#constructor)

### Properties

- [$container](lib_choicesmanagement_choices_choiceinput.choiceinput.md#$container)
- [$eventProvider](lib_choicesmanagement_choices_choiceinput.choiceinput.md#$eventprovider)
- [buildArgs](lib_choicesmanagement_choices_choiceinput.choiceinput.md#buildargs)
- [choiceContainer](lib_choicesmanagement_choices_choiceinput.choiceinput.md#choicecontainer)
- [choicesEnumerator](lib_choicesmanagement_choices_choiceinput.choiceinput.md#choicesenumerator)
- [events](lib_choicesmanagement_choices_choiceinput.choiceinput.md#events)
- [id](lib_choicesmanagement_choices_choiceinput.choiceinput.md#id)
- [type](lib_choicesmanagement_choices_choiceinput.choiceinput.md#type)
- [sizes](lib_choicesmanagement_choices_choiceinput.choiceinput.md#sizes)

### Accessors

- [value](lib_choicesmanagement_choices_choiceinput.choiceinput.md#value)

### Methods

- [build](lib_choicesmanagement_choices_choiceinput.choiceinput.md#build)
- [click](lib_choicesmanagement_choices_choiceinput.choiceinput.md#click)
- [delete](lib_choicesmanagement_choices_choiceinput.choiceinput.md#delete)
- [emit](lib_choicesmanagement_choices_choiceinput.choiceinput.md#emit)
- [input](lib_choicesmanagement_choices_choiceinput.choiceinput.md#input)
- [isDisplaySize](lib_choicesmanagement_choices_choiceinput.choiceinput.md#isdisplaysize)
- [on](lib_choicesmanagement_choices_choiceinput.choiceinput.md#on)
- [onBuild](lib_choicesmanagement_choices_choiceinput.choiceinput.md#onbuild)
- [onBuilt](lib_choicesmanagement_choices_choiceinput.choiceinput.md#onbuilt)
- [onClick](lib_choicesmanagement_choices_choiceinput.choiceinput.md#onclick)
- [onInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md#oninput)
- [once](lib_choicesmanagement_choices_choiceinput.choiceinput.md#once)
- [removeListener](lib_choicesmanagement_choices_choiceinput.choiceinput.md#removelistener)

## Constructors

### constructor

• **new ChoiceInput**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [`ChoiceConstructionOptions`](../modules/lib_choicesmanagement_choices_choice.md#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[constructor](lib_choicesmanagement_choices_choicebutton.choicebutton.md#constructor)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:14](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L14)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[$container](lib_choicesmanagement_choices_choicebutton.choicebutton.md#$container)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLInputElement`

Le container DOM qui est la source des événements

#### Overrides

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[$eventProvider](lib_choicesmanagement_choices_choicebutton.choicebutton.md#$eventprovider)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:14](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L14)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[buildArgs](lib_choicesmanagement_choices_choicebutton.choicebutton.md#buildargs)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [`ChoiceContainer`](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[choiceContainer](lib_choicesmanagement_choices_choicebutton.choicebutton.md#choicecontainer)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choicesEnumerator

• **choicesEnumerator**: [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[choicesEnumerator](lib_choicesmanagement_choices_choicebutton.choicebutton.md#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### events

• **events**: `any`

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[events](lib_choicesmanagement_choices_choicebutton.choicebutton.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[id](lib_choicesmanagement_choices_choicebutton.choicebutton.md#id)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[type](lib_choicesmanagement_choices_choicebutton.choicebutton.md#type)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### sizes

▪ `Static` **sizes**: `Map`<`string`, `number`\>

**`static`**

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[sizes](lib_choicesmanagement_choices_choicebutton.choicebutton.md#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/UIElement.ts#L25)

## Accessors

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:36](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L36)

## Methods

### build

▸ `Protected` **build**(`buildCallback`): [`ChoiceInput`](lib_choicesmanagement_choices_choiceinput.choiceinput.md)

Permet de crée le/les élément(s) DOM qui constitue le boutton

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildCallback` | (...`args`: `any`[]) => `HTMLInputElement` |

#### Returns

[`ChoiceInput`](lib_choicesmanagement_choices_choiceinput.choiceinput.md)

#### Overrides

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[build](lib_choicesmanagement_choices_choicebutton.choicebutton.md#build)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:23](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L23)

___

### click

▸ `Protected` **click**(): `void`

Permet de déclancher l'évenement 'click' sur le bouton

**`memberof`** ChoiceButton

#### Returns

`void`

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[click](lib_choicesmanagement_choices_choicebutton.choicebutton.md#click)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:55](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L55)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[delete](lib_choicesmanagement_choices_choicebutton.choicebutton.md#delete)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:154](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/Choice.ts#L154)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[emit](lib_choicesmanagement_choices_choicebutton.choicebutton.md#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L33)

___

### input

▸ `Protected` **input**(`value?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `""` |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:41](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L41)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[isDisplaySize](lib_choicesmanagement_choices_choicebutton.choicebutton.md#isdisplaysize)

#### Defined in

[lib/UIElement.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/UIElement.ts#L33)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[on](lib_choicesmanagement_choices_choicebutton.choicebutton.md#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L13)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[onBuild](lib_choicesmanagement_choices_choicebutton.choicebutton.md#onbuild)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:136](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/Choice.ts#L136)

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

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[onBuilt](lib_choicesmanagement_choices_choicebutton.choicebutton.md#onbuilt)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:151](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/Choice.ts#L151)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[onClick](lib_choicesmanagement_choices_choicebutton.choicebutton.md#onclick)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:68](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L68)

___

### onInput

▸ `Protected` `Abstract` **onInput**(`ev`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:47](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L47)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[once](lib_choicesmanagement_choices_choicebutton.choicebutton.md#once)

#### Defined in

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L46)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[removeListener](lib_choicesmanagement_choices_choicebutton.choicebutton.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L21)
