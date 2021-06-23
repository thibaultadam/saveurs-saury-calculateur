[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/ChoicesManager/Choices/InputChoice](../modules/oakaddins_code_choicesmanager_choices_inputchoice.md) / InputChoice

# Class: InputChoice

[OakAddins/Code/ChoicesManager/Choices/InputChoice](../modules/oakaddins_code_choicesmanager_choices_inputchoice.md).InputChoice

## Hierarchy

- [ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md)

  ↳ **InputChoice**

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
- [value](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#value)
- [sizes](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#sizes)

### Methods

- [build](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#build)
- [change](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#change)
- [click](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#click)
- [emit](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#emit)
- [isDisplaySize](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#isdisplaysize)
- [on](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#on)
- [onBuild](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#onbuild)
- [onChange](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#onchange)
- [onClick](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#onclick)
- [once](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#once)
- [removeListener](oakaddins_code_choicesmanager_choices_inputchoice.inputchoice.md#removelistener)

## Constructors

### constructor

• **new InputChoice**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceConstructionOptions](../modules/lib_choicesmanagement_choices_choice.md#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[constructor](lib_choicesmanagement_choices_choiceinput.choiceinput.md#constructor)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/InputChoice.ts:8](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/Choices/InputChoice.ts#L8)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[$container](lib_choicesmanagement_choices_choiceinput.choiceinput.md#$container)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLInputElement`

Le container DOM qui est la source des événements

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[$eventProvider](lib_choicesmanagement_choices_choiceinput.choiceinput.md#$eventprovider)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:16](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L16)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[buildArgs](lib_choicesmanagement_choices_choiceinput.choiceinput.md#buildargs)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[choiceContainer](lib_choicesmanagement_choices_choiceinput.choiceinput.md#choicecontainer)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[choicesEnumerator](lib_choicesmanagement_choices_choiceinput.choiceinput.md#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### events

• **events**: `any`

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[events](lib_choicesmanagement_choices_choiceinput.choiceinput.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[id](lib_choicesmanagement_choices_choiceinput.choiceinput.md#id)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[type](lib_choicesmanagement_choices_choiceinput.choiceinput.md#type)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### value

• **value**: `string` = ""

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[value](lib_choicesmanagement_choices_choiceinput.choiceinput.md#value)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceInput.ts:15](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceInput.ts#L15)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[sizes](lib_choicesmanagement_choices_choiceinput.choiceinput.md#sizes)

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/UIElement.ts#L25)

## Methods

### build

▸ `Protected` **build**(`buildCallback`): [ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md)

Permet de crée le/les élément(s) DOM qui constitue le boutton

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildCallback` | (...`args`: `any`[]) => `HTMLInputElement` |

#### Returns

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md)

#### Inherited from

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[build](lib_choicesmanagement_choices_choiceinput.choiceinput.md#build)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[change](lib_choicesmanagement_choices_choiceinput.choiceinput.md#change)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[click](lib_choicesmanagement_choices_choiceinput.choiceinput.md#click)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[emit](lib_choicesmanagement_choices_choiceinput.choiceinput.md#emit)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[isDisplaySize](lib_choicesmanagement_choices_choiceinput.choiceinput.md#isdisplaysize)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[on](lib_choicesmanagement_choices_choiceinput.choiceinput.md#on)

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
| `data.next?` | `string` \| [TreeNode](../modules/oakaddins_code_data_dataparser.md#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [ChoiceData](../modules/oakaddins_code_data_dataprovider.md#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[onBuild](lib_choicesmanagement_choices_choiceinput.choiceinput.md#onbuild)

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
| `data.next?` | `string` \| [TreeNode](../modules/oakaddins_code_data_dataparser.md#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [ChoiceData](../modules/oakaddins_code_data_dataprovider.md#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[onChange](lib_choicesmanagement_choices_choiceinput.choiceinput.md#onchange)

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
| `data.next?` | `string` \| [TreeNode](../modules/oakaddins_code_data_dataparser.md#treenode) |
| `data.rootNext?` | `boolean` |
| `choiceData` | [ChoiceData](../modules/oakaddins_code_data_dataprovider.md#choicedata) |

#### Returns

`void`

#### Overrides

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[onClick](lib_choicesmanagement_choices_choiceinput.choiceinput.md#onclick)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[once](lib_choicesmanagement_choices_choiceinput.choiceinput.md#once)

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

[ChoiceInput](lib_choicesmanagement_choices_choiceinput.choiceinput.md).[removeListener](lib_choicesmanagement_choices_choiceinput.choiceinput.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L21)
