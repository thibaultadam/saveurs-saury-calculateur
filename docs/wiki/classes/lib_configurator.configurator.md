[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/Configurator](../modules/lib_configurator.md) / Configurator

# Class: Configurator

[lib/Configurator](../modules/lib_configurator.md).Configurator

Class mère de tout le configurateur

**`alias`** Configurator

**`abstract`**

## Hierarchy

- [`EventEmitter`](lib_tools_eventemitter.eventemitter.md)

  ↳ **`Configurator`**

  ↳↳ [`OakAddinsConfigurateur`](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md)

## Table of contents

### Constructors

- [constructor](lib_configurator.configurator.md#constructor)

### Properties

- [$container](lib_configurator.configurator.md#$container)
- [choicesManager](lib_configurator.configurator.md#choicesmanager)
- [data](lib_configurator.configurator.md#data)
- [dataParser](lib_configurator.configurator.md#dataparser)
- [events](lib_configurator.configurator.md#events)

### Methods

- [emit](lib_configurator.configurator.md#emit)
- [fetchDataFiles](lib_configurator.configurator.md#fetchdatafiles)
- [on](lib_configurator.configurator.md#on)
- [onDataLoaded](lib_configurator.configurator.md#ondataloaded)
- [once](lib_configurator.configurator.md#once)
- [registerChoiceManagerClass](lib_configurator.configurator.md#registerchoicemanagerclass)
- [registerDataParserClass](lib_configurator.configurator.md#registerdataparserclass)
- [removeListener](lib_configurator.configurator.md#removelistener)

## Constructors

### constructor

• **new Configurator**(`container`, `paths`, `debugLevel?`)

**`memberof`** Configurator

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `string` |
| `paths` | [`ConfiguratorPathes`](../modules/lib_configurator.md#configuratorpathes) |
| `debugLevel?` | [`DebugLevel`](../modules/lib_tools_debug.md#debuglevel) |

#### Overrides

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[constructor](lib_tools_eventemitter.eventemitter.md#constructor)

#### Defined in

[lib/Configurator.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Configurator.ts#L28)

## Properties

### $container

• **$container**: `HTMLElement`

#### Defined in

[lib/Configurator.ts:24](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Configurator.ts#L24)

___

### choicesManager

• **choicesManager**: [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md)

#### Defined in

[lib/Configurator.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Configurator.ts#L25)

___

### data

• **data**: [`Data`](../modules/lib_configurator.md#data) = `{}`

#### Defined in

[lib/Configurator.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Configurator.ts#L28)

___

### dataParser

• **dataParser**: `undefined` \| [`DataParser`](lib_data_dataparser.dataparser.md)

#### Defined in

[lib/Configurator.ts:26](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Configurator.ts#L26)

___

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

### fetchDataFiles

▸ `Private` **fetchDataFiles**(`paths?`): `Promise`<`void`\>

Récuperation de toutes les données externes avec lesquelles sera contruit le Configurateur

**`memberof`** Configurator

#### Parameters

| Name | Type |
| :------ | :------ |
| `paths` | [`ConfiguratorPathes`](../modules/lib_configurator.md#configuratorpathes) |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Configurator.ts:62](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Configurator.ts#L62)

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

### onDataLoaded

▸ `Protected` `Abstract` **onDataLoaded**(): `void`

**`abstract`**

**`example`**
onDataLoaded()
{
 this.registerChoiceManagerClass(ChoicesManager);
 this.choiceManager.buildChoice();
}

**`memberof`** Configurator

#### Returns

`void`

#### Defined in

[lib/Configurator.ts:126](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Configurator.ts#L126)

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

### registerChoiceManagerClass

▸ `Protected` **registerChoiceManagerClass**(`ChoiceManagerClass`): `void`

**`memberof`** Configurator

#### Parameters

| Name | Type |
| :------ | :------ |
| `ChoiceManagerClass` | [`ChoicesManagerConstructor`](../modules/lib_choicesmanagement_choicesmanager.md#choicesmanagerconstructor) |

#### Returns

`void`

#### Defined in

[lib/Configurator.ts:136](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Configurator.ts#L136)

___

### registerDataParserClass

▸ `Protected` **registerDataParserClass**(`DataParserClass`): `void`

**`memberof`** Configurator

#### Parameters

| Name | Type |
| :------ | :------ |
| `DataParserClass` | [`DataParserConstructor`](../modules/lib_data_dataparser.md#dataparserconstructor) |

#### Returns

`void`

#### Defined in

[lib/Configurator.ts:147](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/Configurator.ts#L147)

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
