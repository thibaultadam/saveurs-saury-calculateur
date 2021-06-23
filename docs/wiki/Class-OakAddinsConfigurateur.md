[OakAddins/Code/OakAddinsConfigurateur](../wiki/Module-OakAddins/Code/OakAddinsConfigurateur).OakAddinsConfigurateur

**`alias`** OakAddinsConfigurateur

## Hierarchy

- [Configurator](../wiki/Class-Configurator)

  ↳ **OakAddinsConfigurateur**

## Table of contents

### Constructors

- [constructor](../wiki/Class-OakAddinsConfigurateur#constructor)

### Properties

- [$container](../wiki/Class-OakAddinsConfigurateur#$container)
- [choicesManager](../wiki/Class-OakAddinsConfigurateur#choicesmanager)
- [data](../wiki/Class-OakAddinsConfigurateur#data)
- [dataParser](../wiki/Class-OakAddinsConfigurateur#dataparser)
- [events](../wiki/Class-OakAddinsConfigurateur#events)

### Methods

- [emit](../wiki/Class-OakAddinsConfigurateur#emit)
- [on](../wiki/Class-OakAddinsConfigurateur#on)
- [onDataLoaded](../wiki/Class-OakAddinsConfigurateur#ondataloaded)
- [once](../wiki/Class-OakAddinsConfigurateur#once)
- [registerChoiceManagerClass](../wiki/Class-OakAddinsConfigurateur#registerchoicemanagerclass)
- [registerDataParserClass](../wiki/Class-OakAddinsConfigurateur#registerdataparserclass)
- [removeListener](../wiki/Class-OakAddinsConfigurateur#removelistener)

## Constructors

### constructor

• **new OakAddinsConfigurateur**(`container`, `path`, `debugLevel?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `string` |
| `path` | [ConfiguratorPathes](../wiki/Module-lib/Configurator#configuratorpathes) |
| `debugLevel?` | [DebugLevel](../wiki/Module-lib/Tools/Debug#debuglevel) |

#### Overrides

[Configurator](../wiki/Class-Configurator).[constructor](../wiki/Class-Configurator#constructor)

#### Defined in

[OakAddins/Code/OakAddinsConfigurateur.ts:15](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/OakAddins/Code/OakAddinsConfigurateur.ts#L15)

## Properties

### $container

• **$container**: `HTMLElement`

#### Inherited from

[Configurator](../wiki/Class-Configurator).[$container](../wiki/Class-Configurator#$container)

#### Defined in

[lib/Configurator.ts:24](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Configurator.ts#L24)

___

### choicesManager

• **choicesManager**: [ChoicesManager](../wiki/Class-ChoicesManager)

#### Inherited from

[Configurator](../wiki/Class-Configurator).[choicesManager](../wiki/Class-Configurator#choicesmanager)

#### Defined in

[lib/Configurator.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Configurator.ts#L25)

___

### data

• **data**: [Data](../wiki/Module-lib/Configurator#data) = {}

#### Inherited from

[Configurator](../wiki/Class-Configurator).[data](../wiki/Class-Configurator#data)

#### Defined in

[lib/Configurator.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Configurator.ts#L28)

___

### dataParser

• **dataParser**: `undefined` \| [DataParser](../wiki/Class-DataParser)

#### Inherited from

[Configurator](../wiki/Class-Configurator).[dataParser](../wiki/Class-Configurator#dataparser)

#### Defined in

[lib/Configurator.ts:26](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Configurator.ts#L26)

___

### events

• **events**: `any`

#### Inherited from

[Configurator](../wiki/Class-Configurator).[events](../wiki/Class-Configurator#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L6)

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

[Configurator](../wiki/Class-Configurator).[emit](../wiki/Class-Configurator#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L33)

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

[Configurator](../wiki/Class-Configurator).[on](../wiki/Class-Configurator#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L13)

___

### onDataLoaded

▸ `Protected` **onDataLoaded**(): `void`

#### Returns

`void`

#### Overrides

[Configurator](../wiki/Class-Configurator).[onDataLoaded](../wiki/Class-Configurator#ondataloaded)

#### Defined in

[OakAddins/Code/OakAddinsConfigurateur.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/OakAddins/Code/OakAddinsConfigurateur.ts#L25)

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

[Configurator](../wiki/Class-Configurator).[once](../wiki/Class-Configurator#once)

#### Defined in

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L46)

___

### registerChoiceManagerClass

▸ `Protected` **registerChoiceManagerClass**(`ChoiceManagerClass`): `void`

**`memberof`** Configurator

#### Parameters

| Name | Type |
| :------ | :------ |
| `ChoiceManagerClass` | [ChoicesManagerConstructor](../wiki/Module-lib/ChoicesManagement/ChoicesManager#choicesmanagerconstructor) |

#### Returns

`void`

#### Inherited from

[Configurator](../wiki/Class-Configurator).[registerChoiceManagerClass](../wiki/Class-Configurator#registerchoicemanagerclass)

#### Defined in

[lib/Configurator.ts:136](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Configurator.ts#L136)

___

### registerDataParserClass

▸ `Protected` **registerDataParserClass**(`DataParserClass`): `void`

**`memberof`** Configurator

#### Parameters

| Name | Type |
| :------ | :------ |
| `DataParserClass` | [DataParserConstructor](../wiki/Module-lib/Data/DataParser#dataparserconstructor) |

#### Returns

`void`

#### Inherited from

[Configurator](../wiki/Class-Configurator).[registerDataParserClass](../wiki/Class-Configurator#registerdataparserclass)

#### Defined in

[lib/Configurator.ts:147](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Configurator.ts#L147)

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

[Configurator](../wiki/Class-Configurator).[removeListener](../wiki/Class-Configurator#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L21)
