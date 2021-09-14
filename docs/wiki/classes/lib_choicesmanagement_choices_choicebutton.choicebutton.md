[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/ChoicesManagement/Choices/ChoiceButton](../modules/lib_choicesmanagement_choices_choicebutton.md) / ChoiceButton

# Class: ChoiceButton

[lib/ChoicesManagement/Choices/ChoiceButton](../modules/lib_choicesmanagement_choices_choicebutton.md).ChoiceButton

**`alias`** ChoiceButton

**`abstract`**

## Hierarchy

- [`Choice`](lib_choicesmanagement_choices_choice.choice.md)

  ↳ **`ChoiceButton`**

  ↳↳ [`ChoiceInput`](lib_choicesmanagement_choices_choiceinput.choiceinput.md)

  ↳↳ [`ButtonChoice`](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md)

  ↳↳ [`RadioChoice`](oakaddins_code_choicesmanager_choices_radiochoice.radiochoice.md)

## Table of contents

### Constructors

- [constructor](lib_choicesmanagement_choices_choicebutton.choicebutton.md#constructor)

### Properties

- [$container](lib_choicesmanagement_choices_choicebutton.choicebutton.md#$container)
- [$eventProvider](lib_choicesmanagement_choices_choicebutton.choicebutton.md#$eventprovider)
- [buildArgs](lib_choicesmanagement_choices_choicebutton.choicebutton.md#buildargs)
- [choiceContainer](lib_choicesmanagement_choices_choicebutton.choicebutton.md#choicecontainer)
- [choicesEnumerator](lib_choicesmanagement_choices_choicebutton.choicebutton.md#choicesenumerator)
- [events](lib_choicesmanagement_choices_choicebutton.choicebutton.md#events)
- [id](lib_choicesmanagement_choices_choicebutton.choicebutton.md#id)
- [type](lib_choicesmanagement_choices_choicebutton.choicebutton.md#type)
- [sizes](lib_choicesmanagement_choices_choicebutton.choicebutton.md#sizes)

### Methods

- [build](lib_choicesmanagement_choices_choicebutton.choicebutton.md#build)
- [click](lib_choicesmanagement_choices_choicebutton.choicebutton.md#click)
- [delete](lib_choicesmanagement_choices_choicebutton.choicebutton.md#delete)
- [emit](lib_choicesmanagement_choices_choicebutton.choicebutton.md#emit)
- [isDisplaySize](lib_choicesmanagement_choices_choicebutton.choicebutton.md#isdisplaysize)
- [on](lib_choicesmanagement_choices_choicebutton.choicebutton.md#on)
- [onBuild](lib_choicesmanagement_choices_choicebutton.choicebutton.md#onbuild)
- [onBuilt](lib_choicesmanagement_choices_choicebutton.choicebutton.md#onbuilt)
- [onClick](lib_choicesmanagement_choices_choicebutton.choicebutton.md#onclick)
- [once](lib_choicesmanagement_choices_choicebutton.choicebutton.md#once)
- [removeListener](lib_choicesmanagement_choices_choicebutton.choicebutton.md#removelistener)

## Constructors

### constructor

• **new ChoiceButton**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [`ChoiceConstructionOptions`](../modules/lib_choicesmanagement_choices_choice.md#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[Choice](lib_choicesmanagement_choices_choice.choice.md).[constructor](lib_choicesmanagement_choices_choice.choice.md#constructor)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:17](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L17)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[$container](lib_choicesmanagement_choices_choice.choice.md#$container)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLElement`

Le container DOM qui est la source des événements

**`memberof`** Choice

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[$eventProvider](lib_choicesmanagement_choices_choice.choice.md#$eventprovider)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:64](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L64)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[buildArgs](lib_choicesmanagement_choices_choice.choice.md#buildargs)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [`ChoiceContainer`](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[choiceContainer](lib_choicesmanagement_choices_choice.choice.md#choicecontainer)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choicesEnumerator

• **choicesEnumerator**: [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[choicesEnumerator](lib_choicesmanagement_choices_choice.choice.md#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### events

• **events**: `any`

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[events](lib_choicesmanagement_choices_choice.choice.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[id](lib_choicesmanagement_choices_choice.choice.md#id)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[type](lib_choicesmanagement_choices_choice.choice.md#type)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### sizes

▪ `Static` **sizes**: `Map`<`string`, `number`\>

**`static`**

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[sizes](lib_choicesmanagement_choices_choice.choice.md#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/UIElement.ts#L25)

## Methods

### build

▸ `Protected` **build**(`buildCallback`): [`ChoiceButton`](lib_choicesmanagement_choices_choicebutton.choicebutton.md)

Permet de crée le/les élément(s) DOM qui constitue le boutton

**`memberof`** ChoiceButton

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildCallback` | (...`args`: `any`[]) => `HTMLElement` |

#### Returns

[`ChoiceButton`](lib_choicesmanagement_choices_choicebutton.choicebutton.md)

#### Overrides

[Choice](lib_choicesmanagement_choices_choice.choice.md).[build](lib_choicesmanagement_choices_choice.choice.md#build)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:37](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L37)

___

### click

▸ `Protected` **click**(): `void`

Permet de déclancher l'évenement 'click' sur le bouton

**`memberof`** ChoiceButton

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:55](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L55)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[Choice](lib_choicesmanagement_choices_choice.choice.md).[delete](lib_choicesmanagement_choices_choice.choice.md#delete)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:154](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L154)

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

[Choice](lib_choicesmanagement_choices_choice.choice.md).[emit](lib_choicesmanagement_choices_choice.choice.md#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L33)

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

[Choice](lib_choicesmanagement_choices_choice.choice.md).[isDisplaySize](lib_choicesmanagement_choices_choice.choice.md#isdisplaysize)

#### Defined in

[lib/UIElement.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/UIElement.ts#L33)

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

[Choice](lib_choicesmanagement_choices_choice.choice.md).[on](lib_choicesmanagement_choices_choice.choice.md#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L13)

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

[Choice](lib_choicesmanagement_choices_choice.choice.md).[onBuild](lib_choicesmanagement_choices_choice.choice.md#onbuild)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:136](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L136)

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

[Choice](lib_choicesmanagement_choices_choice.choice.md).[onBuilt](lib_choicesmanagement_choices_choice.choice.md#onbuilt)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:151](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L151)

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

[lib/ChoicesManagement/Choices/ChoiceButton.ts:68](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L68)

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

[Choice](lib_choicesmanagement_choices_choice.choice.md).[once](lib_choicesmanagement_choices_choice.choice.md#once)

#### Defined in

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L46)

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

[Choice](lib_choicesmanagement_choices_choice.choice.md).[removeListener](lib_choicesmanagement_choices_choice.choice.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L21)
