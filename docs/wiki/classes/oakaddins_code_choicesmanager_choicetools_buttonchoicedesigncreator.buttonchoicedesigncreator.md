[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator](../modules/oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md) / ButtonChoiceDesignCreator

# Class: ButtonChoiceDesignCreator

[OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator](../modules/oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md).ButtonChoiceDesignCreator

## Hierarchy

- [`EventEmitter`](lib_tools_eventemitter.eventemitter.md)

  ↳ **`ButtonChoiceDesignCreator`**

## Table of contents

### Constructors

- [constructor](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md#constructor)

### Properties

- [events](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md#events)

### Methods

- [emit](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md#emit)
- [on](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md#on)
- [once](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md#once)
- [removeListener](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md#removelistener)
- [applyHoverEvents](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md#applyhoverevents)
- [createContainer](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md#createcontainer)
- [createProduct](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md#createproduct)

## Constructors

### constructor

• **new ButtonChoiceDesignCreator**()

#### Inherited from

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[constructor](lib_tools_eventemitter.eventemitter.md#constructor)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L6)

## Properties

### events

• **events**: `any`

#### Inherited from

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[events](lib_tools_eventemitter.eventemitter.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L6)

## Methods

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

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[emit](lib_tools_eventemitter.eventemitter.md#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L33)

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

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[on](lib_tools_eventemitter.eventemitter.md#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L13)

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

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[once](lib_tools_eventemitter.eventemitter.md#once)

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

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[removeListener](lib_tools_eventemitter.eventemitter.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L21)

___

### applyHoverEvents

▸ `Static` **applyHoverEvents**(): `void`

#### Returns

`void`

#### Defined in

[OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts:151](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts#L151)

___

### createContainer

▸ `Static` **createContainer**(`buttonContainer`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buttonContainer` | [`ButtonContainer`](oakaddins_code_choicesmanager_choices_buttoncontainer.buttoncontainer.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `container` | `HTMLElement` |
| `globalContainer` | `HTMLElement` |

#### Defined in

[OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts:35](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts#L35)

___

### createProduct

▸ `Static` **createProduct**(`product`, `type`, `id`, `active?`): [`ChoiceDesignElements`](../modules/oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#choicedesignelements)

#### Parameters

| Name | Type |
| :------ | :------ |
| `product` | [`Product`](../modules/oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#product) |
| `type` | `string` |
| `id` | `number` |
| `active?` | `boolean` |

#### Returns

[`ChoiceDesignElements`](../modules/oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#choicedesignelements)

#### Defined in

[OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts#L48)
