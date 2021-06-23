[lib/Configurator](../wiki/Module-lib/Configurator).Configurator

Class mère de tout le configurateur

**`alias`** Configurator

**`abstract`**

## Hierarchy

- [EventEmitter](../wiki/Class-EventEmitter)

  ↳ **Configurator**

  ↳↳ [OakAddinsConfigurateur](../wiki/Class-OakAddinsConfigurateur)

## Table of contents

### Constructors

- [constructor](../wiki/Class-Configurator#constructor)

### Properties

- [$container](../wiki/Class-Configurator#$container)
- [choicesManager](../wiki/Class-Configurator#choicesmanager)
- [data](../wiki/Class-Configurator#data)
- [dataParser](../wiki/Class-Configurator#dataparser)
- [events](../wiki/Class-Configurator#events)

### Methods

- [emit](../wiki/Class-Configurator#emit)
- [fetchDataFiles](../wiki/Class-Configurator#fetchdatafiles)
- [on](../wiki/Class-Configurator#on)
- [onDataLoaded](../wiki/Class-Configurator#ondataloaded)
- [once](../wiki/Class-Configurator#once)
- [registerChoiceManagerClass](../wiki/Class-Configurator#registerchoicemanagerclass)
- [registerDataParserClass](../wiki/Class-Configurator#registerdataparserclass)
- [removeListener](../wiki/Class-Configurator#removelistener)

## Constructors

### constructor

• **new Configurator**(`container`, `paths`, `debugLevel?`)

**`memberof`** Configurator

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `string` |
| `paths` | [ConfiguratorPathes](../wiki/Module-lib/Configurator#configuratorpathes) |
| `debugLevel?` | [DebugLevel](../wiki/Module-lib/Tools/Debug#debuglevel) |

#### Overrides

[EventEmitter](../wiki/Class-EventEmitter).[constructor](../wiki/Class-EventEmitter#constructor)

#### Defined in

[lib/Configurator.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Configurator.ts#L28)

## Properties

### $container

• **$container**: `HTMLElement`

#### Defined in

[lib/Configurator.ts:24](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Configurator.ts#L24)

___

### choicesManager

• **choicesManager**: [ChoicesManager](../wiki/Class-ChoicesManager)

#### Defined in

[lib/Configurator.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Configurator.ts#L25)

___

### data

• **data**: [Data](../wiki/Module-lib/Configurator#data) = {}

#### Defined in

[lib/Configurator.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Configurator.ts#L28)

___

### dataParser

• **dataParser**: `undefined` \| [DataParser](../wiki/Class-DataParser)

#### Defined in

[lib/Configurator.ts:26](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Configurator.ts#L26)

___

### events

• **events**: `any`

#### Inherited from

[EventEmitter](../wiki/Class-EventEmitter).[events](../wiki/Class-EventEmitter#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L6)

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

### fetchDataFiles

▸ `Private` **fetchDataFiles**(`paths?`): `Promise`<void\>

Récuperation de toutes les données externes avec lesquelles sera contruit le Configurateur

**`memberof`** Configurator

#### Parameters

| Name | Type |
| :------ | :------ |
| `paths` | [ConfiguratorPathes](../wiki/Module-lib/Configurator#configuratorpathes) |

#### Returns

`Promise`<void\>

#### Defined in

[lib/Configurator.ts:62](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Configurator.ts#L62)

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

[lib/Configurator.ts:126](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Configurator.ts#L126)

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

### registerChoiceManagerClass

▸ `Protected` **registerChoiceManagerClass**(`ChoiceManagerClass`): `void`

**`memberof`** Configurator

#### Parameters

| Name | Type |
| :------ | :------ |
| `ChoiceManagerClass` | [ChoicesManagerConstructor](../wiki/Module-lib/ChoicesManagement/ChoicesManager#choicesmanagerconstructor) |

#### Returns

`void`

#### Defined in

[lib/Configurator.ts:136](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Configurator.ts#L136)

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

#### Defined in

[lib/Configurator.ts:147](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Configurator.ts#L147)

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
