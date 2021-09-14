[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/TableBuilder/TableBuilder](../modules/oakaddins_code_tablebuilder_tablebuilder.md) / TableBuilder

# Class: TableBuilder

[OakAddins/Code/TableBuilder/TableBuilder](../modules/oakaddins_code_tablebuilder_tablebuilder.md).TableBuilder

## Hierarchy

- [`EventEmitter`](lib_tools_eventemitter.eventemitter.md)

  ↳ **`TableBuilder`**

## Table of contents

### Constructors

- [constructor](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#constructor)

### Properties

- [$container](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#$container)
- [choiceEnumerator](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#choiceenumerator)
- [choicesManager](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#choicesmanager)
- [configurator](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#configurator)
- [containerCreator](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#containercreator)
- [data](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#data)
- [events](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#events)

### Methods

- [build](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#build)
- [buildBodyLine](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#buildbodyline)
- [buildContainer](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#buildcontainer)
- [buildHeadLine](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#buildheadline)
- [delete](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#delete)
- [emit](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#emit)
- [getActualsProducts](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#getactualsproducts)
- [on](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#on)
- [onBuild](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#onbuild)
- [once](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#once)
- [removeListener](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#removelistener)
- [reset](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md#reset)

## Constructors

### constructor

• **new TableBuilder**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TableBuilderConstructorOptions`](../modules/oakaddins_code_tablebuilder_tablebuilder.md#tablebuilderconstructoroptions) |

#### Overrides

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[constructor](lib_tools_eventemitter.eventemitter.md#constructor)

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:34](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L34)

## Properties

### $container

• `Protected` **$container**: `HTMLElement`

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:34](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L34)

___

### choiceEnumerator

• **choiceEnumerator**: [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:30](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L30)

___

### choicesManager

• **choicesManager**: [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md)

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:29](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L29)

___

### configurator

• **configurator**: [`Configurator`](lib_configurator.configurator.md)

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L28)

___

### containerCreator

• `Protected` **containerCreator**: () => `HTMLElement`

#### Type declaration

▸ (): `HTMLElement`

##### Returns

`HTMLElement`

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L33)

___

### data

• `Protected` **data**: [`Data`](../modules/lib_configurator.md#data)

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:31](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L31)

___

### events

• **events**: `any`

#### Inherited from

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[events](lib_tools_eventemitter.eventemitter.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L6)

## Methods

### build

▸ **build**(): `void`

#### Returns

`void`

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:48](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L48)

___

### buildBodyLine

▸ `Protected` **buildBodyLine**(`lineData`, `inputs`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineData` | `any` |
| `inputs` | [`TableBuilderInput`](../modules/oakaddins_code_tablebuilder_tablebuilder.md#tablebuilderinput) |

#### Returns

`string`

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:149](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L149)

___

### buildContainer

▸ `Protected` **buildContainer**(): `void`

#### Returns

`void`

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:54](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L54)

___

### buildHeadLine

▸ `Protected` **buildHeadLine**(`lineData`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineData` | `any` |

#### Returns

`string`

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:135](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L135)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:66](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L66)

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

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[emit](lib_tools_eventemitter.eventemitter.md#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Tools/EventEmitter.ts#L33)

___

### getActualsProducts

▸ `Protected` **getActualsProducts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:77](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L77)

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

### onBuild

▸ `Protected` **onBuild**(): `void`

#### Returns

`void`

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:85](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L85)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[OakAddins/Code/TableBuilder/TableBuilder.ts:71](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/TableBuilder/TableBuilder.ts#L71)
