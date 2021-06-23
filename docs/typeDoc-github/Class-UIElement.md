[lib/UIElement](../wiki/Module-lib/UIElement).UIElement

//TODO : Description

**`alias`** UIElement

## Hierarchy

- [EventEmitter](../wiki/Class-EventEmitter)

  ↳ **UIElement**

  ↳↳ [Choice](../wiki/Class-Choice)

  ↳↳ [ChoiceContainer](../wiki/Class-ChoiceContainer)

## Table of contents

### Constructors

- [constructor](../wiki/Class-UIElement#constructor)

### Properties

- [events](../wiki/Class-UIElement#events)
- [sizes](../wiki/Class-UIElement#sizes)

### Methods

- [emit](../wiki/Class-UIElement#emit)
- [isDisplaySize](../wiki/Class-UIElement#isdisplaysize)
- [on](../wiki/Class-UIElement#on)
- [once](../wiki/Class-UIElement#once)
- [removeListener](../wiki/Class-UIElement#removelistener)

## Constructors

### constructor

• **new UIElement**()

**`memberof`** UIElement

#### Overrides

[EventEmitter](../wiki/Class-EventEmitter).[constructor](../wiki/Class-EventEmitter#constructor)

#### Defined in

[lib/UIElement.ts:10](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/UIElement.ts#L10)

## Properties

### events

• **events**: `any`

#### Inherited from

[EventEmitter](../wiki/Class-EventEmitter).[events](../wiki/Class-EventEmitter#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L6)

___

### sizes

▪ `Static` **sizes**: `Map`<string, number\>

**`static`**

#### Defined in

[lib/UIElement.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/UIElement.ts#L25)

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

[EventEmitter](../wiki/Class-EventEmitter).[emit](../wiki/Class-EventEmitter#emit)

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

[EventEmitter](../wiki/Class-EventEmitter).[on](../wiki/Class-EventEmitter#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L13)

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

[EventEmitter](../wiki/Class-EventEmitter).[once](../wiki/Class-EventEmitter#once)

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

[EventEmitter](../wiki/Class-EventEmitter).[removeListener](../wiki/Class-EventEmitter#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L21)
