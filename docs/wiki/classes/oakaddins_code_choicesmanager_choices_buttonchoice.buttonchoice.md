[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/ChoicesManager/Choices/ButtonChoice](../modules/oakaddins_code_choicesmanager_choices_buttonchoice.md) / ButtonChoice

# Class: ButtonChoice

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice](../modules/oakaddins_code_choicesmanager_choices_buttonchoice.md).ButtonChoice

## Hierarchy

- [`ChoiceButton`](lib_choicesmanagement_choices_choicebutton.choicebutton.md)

  ↳ **`ButtonChoice`**

## Table of contents

### Constructors

- [constructor](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#constructor)

### Properties

- [$container](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#$container)
- [$eventProvider](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#$eventprovider)
- [buildArgs](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#buildargs)
- [choiceContainer](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#choicecontainer)
- [choiceDesignElements](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#choicedesignelements)
- [choicesEnumerator](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#choicesenumerator)
- [eventFromSkip](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#eventfromskip)
- [events](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#events)
- [id](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#id)
- [type](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#type)
- [sizes](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#sizes)

### Methods

- [build](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#build)
- [click](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#click)
- [delete](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#delete)
- [emit](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#emit)
- [isDisplaySize](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#isdisplaysize)
- [on](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#on)
- [onBuild](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#onbuild)
- [onBuilt](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#onbuilt)
- [onClick](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#onclick)
- [once](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#once)
- [removeListener](oakaddins_code_choicesmanager_choices_buttonchoice.buttonchoice.md#removelistener)

## Constructors

### constructor

• **new ButtonChoice**(`constructionOptions`, ...`buildArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [`ChoiceConstructionOptions`](../modules/lib_choicesmanagement_choices_choice.md#choiceconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Overrides

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[constructor](lib_choicesmanagement_choices_choicebutton.choicebutton.md#constructor)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts:16](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts#L16)

## Properties

### $container

• **$container**: `HTMLElement`

Le container DOM du choix

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[$container](lib_choicesmanagement_choices_choicebutton.choicebutton.md#$container)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:56](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L56)

___

### $eventProvider

• **$eventProvider**: `HTMLElement`

Le container DOM qui est la source des événements

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[$eventProvider](lib_choicesmanagement_choices_choicebutton.choicebutton.md#$eventprovider)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:64](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L64)

___

### buildArgs

• `Protected` **buildArgs**: `any`[]

Les arguments de construction du button

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[buildArgs](lib_choicesmanagement_choices_choicebutton.choicebutton.md#buildargs)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:72](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L72)

___

### choiceContainer

• **choiceContainer**: [`ChoiceContainer`](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

Référance a l'instance du container de ce choix

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[choiceContainer](lib_choicesmanagement_choices_choicebutton.choicebutton.md#choicecontainer)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:80](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L80)

___

### choiceDesignElements

• **choiceDesignElements**: `undefined` \| [`ChoiceDesignElements`](../modules/oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#choicedesignelements)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts:11](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts#L11)

___

### choicesEnumerator

• **choicesEnumerator**: [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[choicesEnumerator](lib_choicesmanagement_choices_choicebutton.choicebutton.md#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L48)

___

### eventFromSkip

• **eventFromSkip**: `boolean` = `false`

**`deprecated`**

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts:16](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts#L16)

___

### events

• **events**: `any`

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[events](lib_choicesmanagement_choices_choicebutton.choicebutton.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L6)

___

### id

• **id**: `number`

Identifieur de position dans la liste des choix

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[id](lib_choicesmanagement_choices_choicebutton.choicebutton.md#id)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L32)

___

### type

• **type**: `string`

La string du type de button

**`memberof`** Choice

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[type](lib_choicesmanagement_choices_choicebutton.choicebutton.md#type)

#### Defined in

[lib/ChoicesManagement/Choices/Choice.ts:40](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/Choice.ts#L40)

___

### sizes

▪ `Static` **sizes**: `Map`<`string`, `number`\>

**`static`**

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[sizes](lib_choicesmanagement_choices_choicebutton.choicebutton.md#sizes)

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

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[build](lib_choicesmanagement_choices_choicebutton.choicebutton.md#build)

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceButton.ts:37](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L37)

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

[lib/ChoicesManagement/Choices/ChoiceButton.ts:55](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/Choices/ChoiceButton.ts#L55)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[delete](lib_choicesmanagement_choices_choicebutton.choicebutton.md#delete)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[emit](lib_choicesmanagement_choices_choicebutton.choicebutton.md#emit)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[isDisplaySize](lib_choicesmanagement_choices_choicebutton.choicebutton.md#isdisplaysize)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[on](lib_choicesmanagement_choices_choicebutton.choicebutton.md#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L13)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[onBuild](lib_choicesmanagement_choices_choicebutton.choicebutton.md#onbuild)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts:30](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts#L30)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[onBuilt](lib_choicesmanagement_choices_choicebutton.choicebutton.md#onbuilt)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts:74](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts#L74)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[onClick](lib_choicesmanagement_choices_choicebutton.choicebutton.md#onclick)

#### Defined in

[OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts:76](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/Choices/ButtonChoice.ts#L76)

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

[ChoiceButton](lib_choicesmanagement_choices_choicebutton.choicebutton.md).[removeListener](lib_choicesmanagement_choices_choicebutton.choicebutton.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L21)
