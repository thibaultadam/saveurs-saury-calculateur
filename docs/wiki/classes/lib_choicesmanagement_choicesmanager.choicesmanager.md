[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/ChoicesManagement/ChoicesManager](../modules/lib_choicesmanagement_choicesmanager.md) / ChoicesManager

# Class: ChoicesManager

[lib/ChoicesManagement/ChoicesManager](../modules/lib_choicesmanagement_choicesmanager.md).ChoicesManager

**`alias`** ChoicesManager

**`abstract`**

## Hierarchy

- [EventEmitter](lib_tools_eventemitter.eventemitter.md)

  ↳ **ChoicesManager**

  ↳↳ [ChoicesManager](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md)

## Table of contents

### Constructors

- [constructor](lib_choicesmanagement_choicesmanager.choicesmanager.md#constructor)

### Properties

- [ChoiceContainerClasses](lib_choicesmanagement_choicesmanager.choicesmanager.md#choicecontainerclasses)
- [choiceContainersCreation](lib_choicesmanagement_choicesmanager.choicesmanager.md#choicecontainerscreation)
- [choicesContainersInstances](lib_choicesmanagement_choicesmanager.choicesmanager.md#choicescontainersinstances)
- [choicesEnumerator](lib_choicesmanagement_choicesmanager.choicesmanager.md#choicesenumerator)
- [configurator](lib_choicesmanagement_choicesmanager.choicesmanager.md#configurator)
- [data](lib_choicesmanagement_choicesmanager.choicesmanager.md#data)
- [dataProvider](lib_choicesmanagement_choicesmanager.choicesmanager.md#dataprovider)
- [events](lib_choicesmanagement_choicesmanager.choicesmanager.md#events)

### Methods

- [addChoiceContainersCreation](lib_choicesmanagement_choicesmanager.choicesmanager.md#addchoicecontainerscreation)
- [buildChoice](lib_choicesmanagement_choicesmanager.choicesmanager.md#buildchoice)
- [createChoiceContainer](lib_choicesmanagement_choicesmanager.choicesmanager.md#createchoicecontainer)
- [emit](lib_choicesmanagement_choicesmanager.choicesmanager.md#emit)
- [on](lib_choicesmanagement_choicesmanager.choicesmanager.md#on)
- [onBuildChoice](lib_choicesmanagement_choicesmanager.choicesmanager.md#onbuildchoice)
- [once](lib_choicesmanagement_choicesmanager.choicesmanager.md#once)
- [registerChoiceClass](lib_choicesmanagement_choicesmanager.choicesmanager.md#registerchoiceclass)
- [registerDataProviderClass](lib_choicesmanagement_choicesmanager.choicesmanager.md#registerdataproviderclass)
- [removeListener](lib_choicesmanagement_choicesmanager.choicesmanager.md#removelistener)

## Constructors

### constructor

• **new ChoicesManager**(`configurator`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurator` | [Configurator](lib_configurator.configurator.md) |
| `data` | [Data](../modules/lib_configurator.md#data) |

#### Overrides

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[constructor](lib_tools_eventemitter.eventemitter.md#constructor)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L28)

## Properties

### ChoiceContainerClasses

• `Private` **ChoiceContainerClasses**: `Map`<string, [ChoiceContainerConstructor](../modules/lib_choicesmanagement_choices_choicecontainer.md#choicecontainerconstructor)\>

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:26](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L26)

___

### choiceContainersCreation

• `Private` **choiceContainersCreation**: [ContainerCreationCallback](../modules/lib_choicesmanagement_choices_choicecontainer.md#containercreationcallback)[] = []

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L25)

___

### choicesContainersInstances

• `Protected` **choicesContainersInstances**: `Map`<string, [ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)[]\>

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L28)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:22](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L22)

___

### configurator

• **configurator**: [Configurator](lib_configurator.configurator.md)

___

### data

• **data**: [Data](../modules/lib_configurator.md#data)

___

### dataProvider

• **dataProvider**: [DataProvider](lib_dataprovider.dataprovider.md)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:23](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L23)

___

### events

• **events**: `any`

#### Inherited from

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[events](lib_tools_eventemitter.eventemitter.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L6)

## Methods

### addChoiceContainersCreation

▸ `Protected` **addChoiceContainersCreation**(`creationCallback`): `void`

//TODO : registerChoiceContainersCreation description Registering GLOBAL choice container callback

**`memberof`** ChoicesManager

#### Parameters

| Name | Type |
| :------ | :------ |
| `creationCallback` | [ContainerCreationCallback](../modules/lib_choicesmanagement_choices_choicecontainer.md#containercreationcallback) |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:112](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L112)

___

### buildChoice

▸ **buildChoice**(): `void`

// TODO : buildChoice description

**`memberof`** ChoicesManager

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:45](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L45)

___

### createChoiceContainer

▸ `Protected` **createChoiceContainer**(`type`, ...`args`): ``null`` \| [ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

Initialize creation of a new ChoiceContainer according to his type

**`memberof`** ChoicesManager

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

#### Returns

``null`` \| [ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:75](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L75)

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

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L33)

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

[lib/ChoicesManagement/ChoicesManager.ts:63](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L63)

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

### registerChoiceClass

▸ `Protected` **registerChoiceClass**(`type`, `ChoiceClass`): `void`

// TODO : registerDataProviderClass description

**`memberof`** ChoicesManager

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `ChoiceClass` | [ChoiceContainerConstructor](../modules/lib_choicesmanagement_choices_choicecontainer.md#choicecontainerconstructor) |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:126](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L126)

___

### registerDataProviderClass

▸ `Protected` **registerDataProviderClass**(`DataProvider`): `void`

// TODO : registerDataProviderClass description

**`memberof`** ChoicesManager

#### Parameters

| Name | Type |
| :------ | :------ |
| `DataProvider` | [DataProviderConstructor](../modules/lib_dataprovider.md#dataproviderconstructor) |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:140](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesManager.ts#L140)

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
