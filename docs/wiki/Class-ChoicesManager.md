[lib/ChoicesManagement/ChoicesManager](../wiki/Module-lib/ChoicesManagement/ChoicesManager).ChoicesManager

**`alias`** ChoicesManager

**`abstract`**

## Hierarchy

- [EventEmitter](../wiki/Class-EventEmitter)

  ↳ **ChoicesManager**

  ↳↳ [ChoicesManager](../wiki/Class-ChoicesManager)

## Table of contents

### Constructors

- [constructor](../wiki/Class-ChoicesManager#constructor)

### Properties

- [ChoiceContainerClasses](../wiki/Class-ChoicesManager#choicecontainerclasses)
- [choiceContainersCreation](../wiki/Class-ChoicesManager#choicecontainerscreation)
- [choicesContainersInstances](../wiki/Class-ChoicesManager#choicescontainersinstances)
- [choicesEnumerator](../wiki/Class-ChoicesManager#choicesenumerator)
- [configurator](../wiki/Class-ChoicesManager#configurator)
- [data](../wiki/Class-ChoicesManager#data)
- [dataProvider](../wiki/Class-ChoicesManager#dataprovider)
- [events](../wiki/Class-ChoicesManager#events)

### Methods

- [addChoiceContainersCreation](../wiki/Class-ChoicesManager#addchoicecontainerscreation)
- [buildChoice](../wiki/Class-ChoicesManager#buildchoice)
- [createChoiceContainer](../wiki/Class-ChoicesManager#createchoicecontainer)
- [emit](../wiki/Class-ChoicesManager#emit)
- [on](../wiki/Class-ChoicesManager#on)
- [onBuildChoice](../wiki/Class-ChoicesManager#onbuildchoice)
- [once](../wiki/Class-ChoicesManager#once)
- [registerChoiceClass](../wiki/Class-ChoicesManager#registerchoiceclass)
- [registerDataProviderClass](../wiki/Class-ChoicesManager#registerdataproviderclass)
- [removeListener](../wiki/Class-ChoicesManager#removelistener)

## Constructors

### constructor

• **new ChoicesManager**(`configurator`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurator` | [Configurator](../wiki/Class-Configurator) |
| `data` | [Data](../wiki/Module-lib/Configurator#data) |

#### Overrides

[EventEmitter](../wiki/Class-EventEmitter).[constructor](../wiki/Class-EventEmitter#constructor)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L28)

## Properties

### ChoiceContainerClasses

• `Private` **ChoiceContainerClasses**: `Map`<string, [ChoiceContainerConstructor](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#choicecontainerconstructor)\>

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:26](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L26)

___

### choiceContainersCreation

• `Private` **choiceContainersCreation**: [ContainerCreationCallback](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#containercreationcallback)[] = []

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L25)

___

### choicesContainersInstances

• `Protected` **choicesContainersInstances**: `Map`<string, [ChoiceContainer](../wiki/Class-ChoiceContainer)[]\>

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L28)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:22](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L22)

___

### configurator

• **configurator**: [Configurator](../wiki/Class-Configurator)

___

### data

• **data**: [Data](../wiki/Module-lib/Configurator#data)

___

### dataProvider

• **dataProvider**: [DataProvider](../wiki/Class-DataProvider)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:23](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L23)

___

### events

• **events**: `any`

#### Inherited from

[EventEmitter](../wiki/Class-EventEmitter).[events](../wiki/Class-EventEmitter#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L6)

## Methods

### addChoiceContainersCreation

▸ `Protected` **addChoiceContainersCreation**(`creationCallback`): `void`

//TODO : registerChoiceContainersCreation description Registering GLOBAL choice container callback

**`memberof`** ChoicesManager

#### Parameters

| Name | Type |
| :------ | :------ |
| `creationCallback` | [ContainerCreationCallback](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#containercreationcallback) |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:112](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L112)

___

### buildChoice

▸ **buildChoice**(): `void`

// TODO : buildChoice description

**`memberof`** ChoicesManager

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:45](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L45)

___

### createChoiceContainer

▸ `Protected` **createChoiceContainer**(`type`, ...`args`): ``null`` \| [ChoiceContainer](../wiki/Class-ChoiceContainer)

Initialize creation of a new ChoiceContainer according to his type

**`memberof`** ChoicesManager

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

#### Returns

``null`` \| [ChoiceContainer](../wiki/Class-ChoiceContainer)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:75](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L75)

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

[EventEmitter](../wiki/Class-EventEmitter).[emit](../wiki/Class-EventEmitter#emit)

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

[EventEmitter](../wiki/Class-EventEmitter).[on](../wiki/Class-EventEmitter#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L13)

___

### onBuildChoice

▸ `Protected` `Abstract` **onBuildChoice**(): `void`

Appeler lors ce que la création d'un choix est lancer, cette fonction sert au lancement de la création des containers de choix

**`example`**
onBuildChoice()
{
 this.createChoiceContainer('type', data);
}

**`abstract`**

**`memberof`** ChoicesManager

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:63](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L63)

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

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L46)

___

### registerChoiceClass

▸ `Protected` **registerChoiceClass**(`type`, `ChoiceClass`): `void`

// TODO : registerDataProviderClass description

**`memberof`** ChoicesManager

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `ChoiceClass` | [ChoiceContainerConstructor](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#choicecontainerconstructor) |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:126](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L126)

___

### registerDataProviderClass

▸ `Protected` **registerDataProviderClass**(`DataProvider`): `void`

// TODO : registerDataProviderClass description

**`memberof`** ChoicesManager

#### Parameters

| Name | Type |
| :------ | :------ |
| `DataProvider` | [DataProviderConstructor](../wiki/Module-lib/DataProvider#dataproviderconstructor) |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:140](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesManager.ts#L140)

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

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/Tools/EventEmitter.ts#L21)
