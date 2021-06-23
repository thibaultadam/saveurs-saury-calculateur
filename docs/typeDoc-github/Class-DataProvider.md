[lib/DataProvider](../wiki/Module-lib/DataProvider).DataProvider

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

- **DataProvider**

  ↳ [DataProvider](../wiki/Class-DataProvider)

## Indexable

▪ [index: `string`]: `ProviderHandler` \| [ChoicesManager](../wiki/Class-ChoicesManager) \| [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator) \| [Data](../wiki/Module-lib/Configurator#data)

## Table of contents

### Constructors

- [constructor](../wiki/Class-DataProvider#constructor)

### Properties

- [choicesEnumerator](../wiki/Class-DataProvider#choicesenumerator)
- [choicesManager](../wiki/Class-DataProvider#choicesmanager)
- [data](../wiki/Class-DataProvider#data)

### Methods

- [get](../wiki/Class-DataProvider#get)

## Constructors

### constructor

• **new DataProvider**(`choicesManager`, `choicesEnumerator?`, `data?`)

Le DataProvider est instancier au moment de sont ajout ajout dans le ChoiceManager

**`memberof`** DataProvider

#### Parameters

| Name | Type |
| :------ | :------ |
| `choicesManager` | [ChoicesManager](../wiki/Class-ChoicesManager) |
| `choicesEnumerator` | [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator) |
| `data` | [Data](../wiki/Module-lib/Configurator#data) |

#### Defined in

[lib/DataProvider.ts:32](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/DataProvider.ts#L32)

## Properties

### choicesEnumerator

• `Protected` **choicesEnumerator**: [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator)

___

### choicesManager

• **choicesManager**: [ChoicesManager](../wiki/Class-ChoicesManager)

___

### data

• `Protected` **data**: [Data](../wiki/Module-lib/Configurator#data)

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

[lib/DataProvider.ts:55](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/DataProvider.ts#L55)
