[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/OakAddinsConfigurateur](../modules/oakaddins_code_oakaddinsconfigurateur.md) / OakAddinsConfigurateur

# Class: OakAddinsConfigurateur

[OakAddins/Code/OakAddinsConfigurateur](../modules/oakaddins_code_oakaddinsconfigurateur.md).OakAddinsConfigurateur

**`alias`** OakAddinsConfigurateur

## Hierarchy

- [`Configurator`](lib_configurator.configurator.md)

  ↳ **`OakAddinsConfigurateur`**

## Table of contents

### Constructors

- [constructor](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#constructor)

### Properties

- [$container](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#$container)
- [choicesManager](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#choicesmanager)
- [data](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#data)
- [dataParser](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#dataparser)
- [events](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#events)
- [tableBuilder](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#tablebuilder)

### Methods

- [buildTab](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#buildtab)
- [emit](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#emit)
- [on](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#on)
- [onDataLoaded](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#ondataloaded)
- [once](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#once)
- [registerChoiceManagerClass](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#registerchoicemanagerclass)
- [registerDataParserClass](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#registerdataparserclass)
- [removeListener](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#removelistener)
- [showPWAinstallMessage](oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md#showpwainstallmessage)

## Constructors

### constructor

• **new OakAddinsConfigurateur**(`container`, `path`, `debugLevel?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `string` |
| `path` | [`ConfiguratorPathes`](../modules/lib_configurator.md#configuratorpathes) |
| `debugLevel?` | [`DebugLevel`](../modules/lib_tools_debug.md#debuglevel) |

#### Overrides

[Configurator](lib_configurator.configurator.md).[constructor](lib_configurator.configurator.md#constructor)

#### Defined in

[OakAddins/Code/OakAddinsConfigurateur.ts:18](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/OakAddins/Code/OakAddinsConfigurateur.ts#L18)

## Properties

### $container

• **$container**: `HTMLElement`

#### Inherited from

[Configurator](lib_configurator.configurator.md).[$container](lib_configurator.configurator.md#$container)

#### Defined in

[lib/Configurator.ts:24](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Configurator.ts#L24)

___

### choicesManager

• **choicesManager**: [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md)

#### Inherited from

[Configurator](lib_configurator.configurator.md).[choicesManager](lib_configurator.configurator.md#choicesmanager)

#### Defined in

[lib/Configurator.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Configurator.ts#L25)

___

### data

• **data**: [`Data`](../modules/lib_configurator.md#data) = `{}`

#### Inherited from

[Configurator](lib_configurator.configurator.md).[data](lib_configurator.configurator.md#data)

#### Defined in

[lib/Configurator.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Configurator.ts#L28)

___

### dataParser

• **dataParser**: `undefined` \| [`DataParser`](lib_data_dataparser.dataparser.md)

#### Inherited from

[Configurator](lib_configurator.configurator.md).[dataParser](lib_configurator.configurator.md#dataparser)

#### Defined in

[lib/Configurator.ts:26](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Configurator.ts#L26)

___

### events

• **events**: `any`

#### Inherited from

[Configurator](lib_configurator.configurator.md).[events](lib_configurator.configurator.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L6)

___

### tableBuilder

• **tableBuilder**: [`TableBuilder`](oakaddins_code_tablebuilder_tablebuilder.tablebuilder.md)

#### Defined in

[OakAddins/Code/OakAddinsConfigurateur.ts:18](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/OakAddins/Code/OakAddinsConfigurateur.ts#L18)

## Methods

### buildTab

▸ `Private` **buildTab**(): `void`

#### Returns

`void`

#### Defined in

[OakAddins/Code/OakAddinsConfigurateur.ts:52](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/OakAddins/Code/OakAddinsConfigurateur.ts#L52)

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

[Configurator](lib_configurator.configurator.md).[emit](lib_configurator.configurator.md#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L33)

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

[Configurator](lib_configurator.configurator.md).[on](lib_configurator.configurator.md#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L13)

___

### onDataLoaded

▸ `Protected` **onDataLoaded**(): `void`

#### Returns

`void`

#### Overrides

[Configurator](lib_configurator.configurator.md).[onDataLoaded](lib_configurator.configurator.md#ondataloaded)

#### Defined in

[OakAddins/Code/OakAddinsConfigurateur.ts:30](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/OakAddins/Code/OakAddinsConfigurateur.ts#L30)

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

[Configurator](lib_configurator.configurator.md).[once](lib_configurator.configurator.md#once)

#### Defined in

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L46)

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

#### Inherited from

[Configurator](lib_configurator.configurator.md).[registerChoiceManagerClass](lib_configurator.configurator.md#registerchoicemanagerclass)

#### Defined in

[lib/Configurator.ts:136](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Configurator.ts#L136)

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

#### Inherited from

[Configurator](lib_configurator.configurator.md).[registerDataParserClass](lib_configurator.configurator.md#registerdataparserclass)

#### Defined in

[lib/Configurator.ts:147](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Configurator.ts#L147)

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

[Configurator](lib_configurator.configurator.md).[removeListener](lib_configurator.configurator.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/lib/Tools/EventEmitter.ts#L21)

___

### showPWAinstallMessage

▸ `Private` **showPWAinstallMessage**(): `void`

#### Returns

`void`

#### Defined in

[OakAddins/Code/OakAddinsConfigurateur.ts:59](https://github.com/P0ulpy/Configurateur-OakAddins/blob/a535c84/src/OakAddins/Code/OakAddinsConfigurateur.ts#L59)
