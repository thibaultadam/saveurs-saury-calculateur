[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / [lib/ChoicesManagement/ChoicesEnumerator](../modules/lib_choicesmanagement_choicesenumerator.md) / ChoicesEnumerator

# Class: ChoicesEnumerator

[lib/ChoicesManagement/ChoicesEnumerator](../modules/lib_choicesmanagement_choicesenumerator.md).ChoicesEnumerator

**`alias`** ChoicesEnumerator

## Hierarchy

- [EventEmitter](lib_tools_eventemitter.eventemitter.md)

  ↳ **ChoicesEnumerator**

## Table of contents

### Constructors

- [constructor](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#constructor)

### Properties

- [choices](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#choices)
- [current](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#current)
- [events](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#events)

### Accessors

- [completed](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#completed)
- [completedCount](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#completedcount)
- [nextChoice](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#nextchoice)
- [nexts](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#nexts)
- [notCompleted](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#notcompleted)
- [previousChoice](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#previouschoice)

### Methods

- [emit](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#emit)
- [get](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#get)
- [getByLabel](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#getbylabel)
- [goTo](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#goto)
- [isEnd](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#isend)
- [next](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#next)
- [on](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#on)
- [once](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#once)
- [removeListener](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#removelistener)
- [set](lib_choicesmanagement_choicesenumerator.choicesenumerator.md#set)

## Constructors

### constructor

• **new ChoicesEnumerator**(`choicesLabels`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `choicesLabels` | `string`[] \| `string`[][] | liste des labels des différentes étapes du configurateur permet de générer les choix |

#### Overrides

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[constructor](lib_tools_eventemitter.eventemitter.md#constructor)

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:49](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L49)

## Properties

### choices

• **choices**: [Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)[]

toute les étapes de la construction du configurateur

**`memberof`** ChoicesEnumerator

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:41](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L41)

___

### current

• **current**: [Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)

l'étape courante de la construction du configurateur

**`memberof`** ChoicesEnumerator

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:49](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L49)

___

### events

• **events**: `any`

#### Inherited from

[EventEmitter](lib_tools_eventemitter.eventemitter.md).[events](lib_tools_eventemitter.eventemitter.md#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L6)

## Accessors

### completed

• `get` **completed**(): [CompletedChoice](../modules/lib_choicesmanagement_choicesenumerator.md#completedchoice)[]

Permets de récupérer les choix qui ont une valeur définie

**`memberof`** ChoicesEnumerator

#### Returns

[CompletedChoice](../modules/lib_choicesmanagement_choicesenumerator.md#completedchoice)[]

tableau choix complété

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:282](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L282)

___

### completedCount

• `get` **completedCount**(): `number`

Permets de récupérer le nombre de choix qui ont une valeur définie

**`memberof`** ChoicesEnumerator

#### Returns

`number`

nombre de choix complété

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:248](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L248)

___

### nextChoice

• `get` **nextChoice**(): [Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)

Contien le choix suivant (retourne l'actuel si il n'y a pas de suivant)

**`memberof`** ChoicesEnumerator

#### Returns

[Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:111](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L111)

___

### nexts

• `get` **nexts**(): [Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)[]

Permets de récupérer tout les choix qui suivent le courant

**`memberof`** ChoicesEnumerator

#### Returns

[Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)[]

tableau choix qui suivent le courant

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:264](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L264)

___

### notCompleted

• `get` **notCompleted**(): [EmptyChoice](../modules/lib_choicesmanagement_choicesenumerator.md#emptychoice)[]

Permets de récupérer les choix qui n'ont pas de valeur définie

**`memberof`** ChoicesEnumerator

#### Returns

[EmptyChoice](../modules/lib_choicesmanagement_choicesenumerator.md#emptychoice)[]

tableau choix qui n'ont pas de valeur définie

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:303](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L303)

___

### previousChoice

• `get` **previousChoice**(): [Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)

Contien le choix precedant (retourne l'actuel si il n'y a pas de precedant)

**`memberof`** ChoicesEnumerator

#### Returns

[Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:128](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L128)

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

[lib/Tools/EventEmitter.ts:33](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/Tools/EventEmitter.ts#L33)

___

### get

▸ **get**(`index`): [Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)

Permets de récupérer un choix en fonction de son index

**`memberof`** ChoicesEnumerator

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:237](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L237)

___

### getByLabel

▸ `Private` **getByLabel**(`label`): `undefined` \| [Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)

Permets de récupérer un choix en fonction de son label

**`memberof`** ChoicesEnumerator

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`undefined` \| [Choice](../modules/lib_choicesmanagement_choicesenumerator.md#choice)

Le premier choix trouvé avec le label correspondant

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:226](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L226)

___

### goTo

▸ **goTo**(`index`): `void`

Fait ce déplacer le choix actuel vers un autre en fonction de sont index, réinitialise au passage les choix supérieurs

**`memberof`** ChoicesEnumerator

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:166](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L166)

___

### isEnd

▸ **isEnd**(): `boolean`

**`memberof`** ChoicesEnumerator

#### Returns

`boolean`

true si le choix actuel est le dernier

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:214](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L214)

___

### next

▸ **next**(`value`): `void`

Fait ce déplacer le choix actuel vers un autre en fonction de sont index, réinitialise au passage les choix supérieurs

**`memberof`** ChoicesEnumerator

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:145](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L145)

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

___

### set

▸ **set**(`index`, `value`): `void`

Permets de définir la valeur d'un choix en fonction de sont index

**`memberof`** ChoicesEnumerator

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:198](https://github.com/P0ulpy/Configurateur-OakAddins/blob/cc0811b/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L198)
