[lib/ChoicesManagement/ChoicesEnumerator](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator).ChoicesEnumerator

**`alias`** ChoicesEnumerator

## Hierarchy

- [EventEmitter](../wiki/Class-EventEmitter)

  ↳ **ChoicesEnumerator**

## Table of contents

### Constructors

- [constructor](../wiki/Class-ChoicesEnumerator#constructor)

### Properties

- [choices](../wiki/Class-ChoicesEnumerator#choices)
- [current](../wiki/Class-ChoicesEnumerator#current)
- [events](../wiki/Class-ChoicesEnumerator#events)

### Accessors

- [completed](../wiki/Class-ChoicesEnumerator#completed)
- [completedCount](../wiki/Class-ChoicesEnumerator#completedcount)
- [nextChoice](../wiki/Class-ChoicesEnumerator#nextchoice)
- [nexts](../wiki/Class-ChoicesEnumerator#nexts)
- [notCompleted](../wiki/Class-ChoicesEnumerator#notcompleted)
- [previousChoice](../wiki/Class-ChoicesEnumerator#previouschoice)

### Methods

- [emit](../wiki/Class-ChoicesEnumerator#emit)
- [get](../wiki/Class-ChoicesEnumerator#get)
- [getByLabel](../wiki/Class-ChoicesEnumerator#getbylabel)
- [goTo](../wiki/Class-ChoicesEnumerator#goto)
- [isEnd](../wiki/Class-ChoicesEnumerator#isend)
- [next](../wiki/Class-ChoicesEnumerator#next)
- [on](../wiki/Class-ChoicesEnumerator#on)
- [once](../wiki/Class-ChoicesEnumerator#once)
- [removeListener](../wiki/Class-ChoicesEnumerator#removelistener)
- [set](../wiki/Class-ChoicesEnumerator#set)

## Constructors

### constructor

• **new ChoicesEnumerator**(`choicesLabels`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `choicesLabels` | `string`[] \| `string`[][] | liste des labels des différentes étapes du configurateur permet de générer les choix |

#### Overrides

[EventEmitter](../wiki/Class-EventEmitter).[constructor](../wiki/Class-EventEmitter#constructor)

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:49](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L49)

## Properties

### choices

• **choices**: [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)[]

toute les étapes de la construction du configurateur

**`memberof`** ChoicesEnumerator

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:41](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L41)

___

### current

• **current**: [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)

l'étape courante de la construction du configurateur

**`memberof`** ChoicesEnumerator

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:49](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L49)

___

### events

• **events**: `any`

#### Inherited from

[EventEmitter](../wiki/Class-EventEmitter).[events](../wiki/Class-EventEmitter#events)

#### Defined in

[lib/Tools/EventEmitter.ts:6](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/Tools/EventEmitter.ts#L6)

## Accessors

### completed

• `get` **completed**(): [CompletedChoice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#completedchoice)[]

Permets de récupérer les choix qui ont une valeur définie

**`memberof`** ChoicesEnumerator

#### Returns

[CompletedChoice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#completedchoice)[]

tableau choix complété

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:282](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L282)

___

### completedCount

• `get` **completedCount**(): `number`

Permets de récupérer le nombre de choix qui ont une valeur définie

**`memberof`** ChoicesEnumerator

#### Returns

`number`

nombre de choix complété

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:248](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L248)

___

### nextChoice

• `get` **nextChoice**(): [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)

Contien le choix suivant (retourne l'actuel si il n'y a pas de suivant)

**`memberof`** ChoicesEnumerator

#### Returns

[Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:111](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L111)

___

### nexts

• `get` **nexts**(): [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)[]

Permets de récupérer tout les choix qui suivent le courant

**`memberof`** ChoicesEnumerator

#### Returns

[Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)[]

tableau choix qui suivent le courant

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:264](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L264)

___

### notCompleted

• `get` **notCompleted**(): [EmptyChoice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#emptychoice)[]

Permets de récupérer les choix qui n'ont pas de valeur définie

**`memberof`** ChoicesEnumerator

#### Returns

[EmptyChoice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#emptychoice)[]

tableau choix qui n'ont pas de valeur définie

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:303](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L303)

___

### previousChoice

• `get` **previousChoice**(): [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)

Contien le choix precedant (retourne l'actuel si il n'y a pas de precedant)

**`memberof`** ChoicesEnumerator

#### Returns

[Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:128](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L128)

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

### get

▸ **get**(`index`): [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)

Permets de récupérer un choix en fonction de son index

**`memberof`** ChoicesEnumerator

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:237](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L237)

___

### getByLabel

▸ `Private` **getByLabel**(`label`): `undefined` \| [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)

Permets de récupérer un choix en fonction de son label

**`memberof`** ChoicesEnumerator

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`undefined` \| [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)

Le premier choix trouvé avec le label correspondant

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:226](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L226)

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

[lib/ChoicesManagement/ChoicesEnumerator.ts:166](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L166)

___

### isEnd

▸ **isEnd**(): `boolean`

**`memberof`** ChoicesEnumerator

#### Returns

`boolean`

true si le choix actuel est le dernier

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:214](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L214)

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

[lib/ChoicesManagement/ChoicesEnumerator.ts:145](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L145)

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

[lib/ChoicesManagement/ChoicesEnumerator.ts:198](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L198)
