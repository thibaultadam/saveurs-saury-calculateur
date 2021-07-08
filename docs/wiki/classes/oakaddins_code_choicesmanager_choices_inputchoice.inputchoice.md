[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/ChoicesManager/Choices/InputChoice](../modules/oakaddins_code_choicesmanager_choices_inputchoice.md) / InputChoice

# Class: InputChoice

[OakAddins/Code/ChoicesManager/Choices/InputChoice](../modules/oakaddins_code_choicesmanager_choices_inputchoice.md).InputChoice

## Hierarchy

- [`ChoiceInput`](lib_choicesmanagement_choices_choiceinput.choiceinput.md)

  ↳ **`InputChoice`**

## Table of contents

### Constructors

- [constructor](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#constructor)

### Properties

- [$container](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#$container)
- [$eventProvider](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#$eventprovider)
- [buildArgs](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#buildargs)
- [choiceContainer](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#choicecontainer)
- [choicesEnumerator](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#choicesenumerator)
- [events](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#events)
- [id](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#id)
- [type](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#type)
- [sizes](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#sizes)

### Accessors

- [value](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#value)

### Methods

- [build](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#build)
- [click](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#click)
- [delete](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#delete)
- [emit](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#emit)
- [input](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#input)
- [isDisplaySize](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#isdisplaysize)
- [on](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#on)
- [onBuild](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#onbuild)
- [onBuilt](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#onbuilt)
- [onClick](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#onclick)
- [onInput](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#oninput)
- [once](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#once)
- [removeListener](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#removelistener)

## Constructors

### constructor

• **new InputChoice**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [`ChoiceConstructionOptions`](../modules/lib_choicesmanagement_choices_choice.md#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[constructor](lib_choicesmanagement_choices_choiceinput.choiceinput.md#constructor)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:8](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L8)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[$container](lib_choicesmanagement_choices_choiceinput.choiceinput.md#$container)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLInputElement`

Le container DOM qui est la source des événements

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[$eventProvider](lib_choicesmanagement_choices_choiceinput.choiceinput.md#$eventprovider)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:14](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L14)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[buildArgs](lib_choicesmanagement_choices_choiceinput.choiceinput.md#buildargs)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [`ChoiceContainer`](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[choiceContainer](lib_choicesmanagement_choices_choiceinput.choiceinput.md#choicecontainer)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choicesEnumerator

• **choicesEnumerator**: [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[choicesEnumerator](lib_choicesmanagement_choices_choiceinput.choiceinput.md#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### events

• **events**: `any`

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[events](lib_choicesmanagement_choices_choiceinput.choiceinput.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[id](lib_choicesmanagement_choices_choiceinput.choiceinput.md#id)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[type](lib_choicesmanagement_choices_choiceinput.choiceinput.md#type)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### sizes

▪ `Static` **sizes**: `Map`<`string`, `number`\>

**`static`**

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[sizes](lib_choicesmanagement_choices_choiceinput.choiceinput.md#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/UIElement.ts#L25)

## Accessors

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:36](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L36)

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

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[build](lib_choicesmanagement_choices_choiceinput.choiceinput.md#build)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:23](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L23)

___

### click

▸ `Protected` **click**(): `void`

Permet de déclancher l'évenement 'click' sur le bouton

**`memberof`** ChoiceButton

#### Returns

`void`

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[click](lib_choicesmanagement_choices_choiceinput.choiceinput.md#click)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:55](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L55)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[delete](lib_choicesmanagement_choices_choiceinput.choiceinput.md#delete)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[emit](lib_choicesmanagement_choices_choiceinput.choiceinput.md#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/Tools/EventEmitter.ts#L33)

___

### input

▸ `Protected` **input**(`value?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `""` |

#### Returns

`void`

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[input](lib_choicesmanagement_choices_choiceinput.choiceinput.md#input)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:41](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L41)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[isDisplaySize](lib_choicesmanagement_choices_choiceinput.choiceinput.md#isdisplaysize)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[on](lib_choicesmanagement_choices_choiceinput.choiceinput.md#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/Tools/EventEmitter.ts#L13)

___

### onBuild

▸ `Protected` **onBuild**(`data`, `choiceData`): `void`

Est appeler lorsque la construction du boutton est déclanché

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.label` | `string` |
| `data.next?` | `string` \| [`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [`ChoiceData`](../modules/oakaddins_code_data_dataparser.md#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[onBuild](lib_choicesmanagement_choices_choiceinput.choiceinput.md#onbuild)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L21)

___

### onBuilt

▸ `Protected` **onBuilt**(`data`, `choiceData`): `void`

Est appelé lorsque la construction du boutton et de son container est completement fini dans les couches plus haute des appels (choiceManager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.label` | `string` |
| `data.next?` | `string` \| [`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [`ChoiceData`](../modules/oakaddins_code_data_dataparser.md#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[onBuilt](lib_choicesmanagement_choices_choiceinput.choiceinput.md#onbuilt)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L40)

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
| `data.next?` | `string` \| [`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [`ChoiceData`](../modules/oakaddins_code_data_dataparser.md#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[onClick](lib_choicesmanagement_choices_choiceinput.choiceinput.md#onclick)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:66](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L66)

___

### onInput

▸ `Protected` **onInput**(`ev`, `data`, `choiceData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |
| `data` | `Object` |
| `data.label` | `string` |
| `data.next?` | `string` \| [`TreeNode`](../modules/oakaddins_code_data_dataparser.md#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [`ChoiceData`](../modules/oakaddins_code_data_dataparser.md#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[onInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md#oninput)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:43](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L43)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[once](lib_choicesmanagement_choices_choiceinput.choiceinput.md#once)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[removeListener](lib_choicesmanagement_choices_choiceinput.choiceinput.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/Tools/EventEmitter.ts#L21)
