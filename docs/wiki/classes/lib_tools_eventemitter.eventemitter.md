[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/Tools/EventEmitter](../modules/lib_tools_eventemitter.md) / EventEmitter

# Class: EventEmitter

[lib/Tools/EventEmitter](../modules/lib_tools_eventemitter.md).EventEmitter

## Hierarchy

- **`EventEmitter`**

  ↳ [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

  ↳ [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md)

  ↳ [`Configurator`](lib_configurator.configurator.md)

  ↳ [`UIElement`](lib_uielement.uielement.md)

  ↳ [`ChoiceParamParser`](oakaddins_code_choicesmanager_choiceparamparser.choiceparamparser.md)

  ↳ [`ButtonChoiceDesignCreator`](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md)

  ↳ [`TableBuilder`](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md)

## Table of contents

### Constructors

- [constructor](lib_tools_eventemitter.eventemitter.md#constructor)

### Properties

- [events](lib_tools_eventemitter.eventemitter.md#events)

### Methods

- [emit](lib_tools_eventemitter.eventemitter.md#emit)
- [on](lib_tools_eventemitter.eventemitter.md#on)
- [once](lib_tools_eventemitter.eventemitter.md#once)
- [removeListener](lib_tools_eventemitter.eventemitter.md#removelistener)

## Constructors

### constructor

• **new EventEmitter**()

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L6)

## Properties

### events

• **events**: `any`

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

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L21)
