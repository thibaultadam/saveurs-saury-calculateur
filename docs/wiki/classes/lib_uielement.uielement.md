[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/UIElement](../modules/lib_uielement.md) / UIElement

# Class: UIElement

[lib/UIElement](../modules/lib_uielement.md).UIElement

//TODO : Description

**`alias`** UIElement

## Hierarchy

- [EventEmitter](lib_tools_eventemitter.eventemitter.md)

  ↳ **UIElement**

  ↳↳ [Choice](lib_choicesmanagement_choices_choice.choice.md)

  ↳↳ [ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

## Table of contents

### Constructors

- [constructor](lib_uielement.uielement.md#constructor)

### Properties

- [events](lib_uielement.uielement.md#events)
- [sizes](lib_uielement.uielement.md#sizes)

### Methods

- [emit](lib_uielement.uielement.md#emit)
- [isDisplaySize](lib_uielement.uielement.md#isdisplaysize)
- [on](lib_uielement.uielement.md#on)
- [once](lib_uielement.uielement.md#once)
- [removeListener](lib_uielement.uielement.md#removelistener)

## Constructors

### constructor

• **new UIElement**()

**`memberof`** UIElement

#### Overrides

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[constructor](lib_tools_eventemitter.eventemitter.md#constructor)

#### Defined in

[lib/UIElement.ts:10](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/UIElement.ts#L10)

## Properties

### events

• **events**: `any`

#### Inherited from

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[events](lib_tools_eventemitter.eventemitter.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L6)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/UIElement.ts#L25)

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

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L33)

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

#### Defined in

[lib/UIElement.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/UIElement.ts#L33)

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

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L13)

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

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L46)

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

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L21)
