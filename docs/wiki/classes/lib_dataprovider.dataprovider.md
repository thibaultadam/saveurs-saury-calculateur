[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/DataProvider](../modules/lib_dataprovider.md) / DataProvider

# Class: DataProvider

[lib/DataProvider](../modules/lib_dataprovider.md).DataProvider

Permet la déclaration et la centralisation des méthodes de récupération de données
la décalaration des Handlers se fait directement dans la class et sont accès ce fait soit directement
soit via la méthode "get".
/!\ un Handler doit forcement avoir un nom qui commance par 'get' afin de le différencier des autre methodes

**`example`**
public getUserData(userID: number)
{
 return this.data.users[userID];
}

// on peut l'appeler directement
dataProvider.getUserData(0);

// ou via la methode get sans avoir besoin de mettre le get au debut du nom de la méthode
dataProvider.get('UserData', 0)

**`alias`** DataProvider

## Hierarchy

- **`DataProvider`**

  ↳ [`DataProvider`](oakaddins_code_data_dataprovider.dataprovider.md)

## Indexable

▪ [index: `string`]: `ProviderHandler` \| [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md) \| [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md) \| [`Data`](../modules/lib_configurator.md#data)

## Table of contents

### Constructors

- [constructor](lib_dataprovider.dataprovider.md#constructor)

### Properties

- [choicesEnumerator](lib_dataprovider.dataprovider.md#choicesenumerator)
- [choicesManager](lib_dataprovider.dataprovider.md#choicesmanager)
- [data](lib_dataprovider.dataprovider.md#data)

### Methods

- [get](lib_dataprovider.dataprovider.md#get)

## Constructors

### constructor

• **new DataProvider**(`choicesManager`, `choicesEnumerator?`, `data?`)

Le DataProvider est instancier au moment de sont ajout ajout dans le ChoiceManager

**`memberof`** DataProvider

#### Parameters

| Name | Type |
| :------ | :------ |
| `choicesManager` | [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md) |
| `choicesEnumerator` | [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md) |
| `data` | [`Data`](../modules/lib_configurator.md#data) |

#### Defined in

[lib/DataProvider.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/DataProvider.ts#L32)

## Properties

### choicesEnumerator

• `Protected` **choicesEnumerator**: [`ChoicesEnumerator`](lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

___

### choicesManager

• **choicesManager**: [`ChoicesManager`](lib_choicesmanagement_choicesmanager.choicesmanager.md)

___

### data

• `Protected` **data**: [`Data`](../modules/lib_configurator.md#data)

## Methods

### get

▸ **get**(`index`, ...`args`): `any`

**`memberof`** DataProvider

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `string` | provider name |
| `...args` | `any`[] | - |

#### Returns

`any`

#### Defined in

[lib/DataProvider.ts:55](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cf4ecab/src/lib/DataProvider.ts#L55)
