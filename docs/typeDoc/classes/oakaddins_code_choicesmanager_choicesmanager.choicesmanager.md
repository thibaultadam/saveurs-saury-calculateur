[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [OakAddins/Code/ChoicesManager/ChoicesManager](../modules/oakaddins_code_choicesmanager_choicesmanager.md) / ChoicesManager

# Class: ChoicesManager

[OakAddins/Code/ChoicesManager/ChoicesManager](../modules/oakaddins_code_choicesmanager_choicesmanager.md).ChoicesManager

## Hierarchy

- [ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md)

  ↳ **ChoicesManager**

## Table of contents

### Constructors

- [constructor](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#constructor)

### Properties

- [choicesContainersInstances](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#choicescontainersinstances)
- [choicesEnumerator](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#choicesenumerator)
- [configurator](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#configurator)
- [data](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#data)
- [dataProvider](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#dataprovider)
- [events](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#events)

### Methods

- [addChoiceContainersCreation](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#addchoicecontainerscreation)
- [buildChoice](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#buildchoice)
- [createChoiceContainer](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#createchoicecontainer)
- [emit](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#emit)
- [on](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#on)
- [onBuildChoice](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#onbuildchoice)
- [once](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#once)
- [registerChoiceClass](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#registerchoiceclass)
- [registerDataProviderClass](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#registerdataproviderclass)
- [removeListener](oakaddins_code_choicesmanager_choicesmanager.choicesmanager.md#removelistener)

## Constructors

### constructor

• **new ChoicesManager**(`configurator`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurator` | [Configurator](lib_configurator.configurator.md) |

#### Overrides

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[constructor](lib_choicesmanagement_choicesmanager.choicesmanager.md#constructor)

#### Defined in

[OakAddins/Code/ChoicesManager/ChoicesManager.ts:14](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/ChoicesManager.ts#L14)

## Properties

### choicesContainersInstances

• `Protected` **choicesContainersInstances**: `Map`<string, [ChoiceContainer](lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)[]\>

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[choicesContainersInstances](lib_choicesmanagement_choicesmanager.choicesmanager.md#choicescontainersinstances)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:28](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesManager.ts#L28)

___

### choicesEnumerator

• **choicesEnumerator**: [ChoicesEnumerator](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[choicesEnumerator](lib_choicesmanagement_choicesmanager.choicesmanager.md#choicesenumerator)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:22](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesManager.ts#L22)

___

### configurator

• **configurator**: [Configurator](lib_configurator.configurator.md)

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[configurator](lib_choicesmanagement_choicesmanager.choicesmanager.md#configurator)

___

### data

• **data**: [Data](../modules/lib_configurator.md#data)

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[data](lib_choicesmanagement_choicesmanager.choicesmanager.md#data)

___

### dataProvider

• **dataProvider**: [DataProvider](lib_dataprovider.dataprovider.md)

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[dataProvider](lib_choicesmanagement_choicesmanager.choicesmanager.md#dataprovider)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:23](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesManager.ts#L23)

___

### events

• **events**: `any`

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[events](lib_choicesmanagement_choicesmanager.choicesmanager.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L6)

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

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[addChoiceContainersCreation](lib_choicesmanagement_choicesmanager.choicesmanager.md#addchoicecontainerscreation)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:112](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesManager.ts#L112)

___

### buildChoice

▸ **buildChoice**(): `void`

// TODO : buildChoice description

**`memberof`** ChoicesManager

#### Returns

`void`

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[buildChoice](lib_choicesmanagement_choicesmanager.choicesmanager.md#buildchoice)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:45](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesManager.ts#L45)

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

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[createChoiceContainer](lib_choicesmanagement_choicesmanager.choicesmanager.md#createchoicecontainer)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:75](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesManager.ts#L75)

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

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[emit](lib_choicesmanagement_choicesmanager.choicesmanager.md#emit)

#### Defined in

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L33)

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

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[on](lib_choicesmanagement_choicesmanager.choicesmanager.md#on)

#### Defined in

[lib/Tools/EventEmitter.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L13)

___

### onBuildChoice

▸ `Protected` **onBuildChoice**(): `void`

Appeler lors ce que la création d'un choix est lancer, cette fonction sert au lancement de la création des containers de choix

#### Returns

`void`

#### Overrides

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[onBuildChoice](lib_choicesmanagement_choicesmanager.choicesmanager.md#onbuildchoice)

#### Defined in

[OakAddins/Code/ChoicesManager/ChoicesManager.ts:27](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/OakAddins/Code/ChoicesManager/ChoicesManager.ts#L27)

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

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[once](lib_choicesmanagement_choicesmanager.choicesmanager.md#once)

#### Defined in

[lib/Tools/EventEmitter.ts:46](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L46)

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

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[registerChoiceClass](lib_choicesmanagement_choicesmanager.choicesmanager.md#registerchoiceclass)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:126](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesManager.ts#L126)

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

#### Inherited from

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[registerDataProviderClass](lib_choicesmanagement_choicesmanager.choicesmanager.md#registerdataproviderclass)

#### Defined in

[lib/ChoicesManagement/ChoicesManager.ts:140](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesManager.ts#L140)

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

[ChoicesManager](lib_choicesmanagement_choicesmanager.choicesmanager.md).[removeListener](lib_choicesmanagement_choicesmanager.choicesmanager.md#removelistener)

#### Defined in

[lib/Tools/EventEmitter.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L21)
