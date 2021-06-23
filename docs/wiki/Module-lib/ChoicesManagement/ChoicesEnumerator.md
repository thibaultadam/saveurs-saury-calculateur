## Table of contents

### Classes

- [ChoicesEnumerator](../wiki/Class-ChoicesEnumerator)

### Type aliases

- [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice)
- [CompletedChoice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#completedchoice)
- [EmptyChoice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#emptychoice)
- [MultipleLabel](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#multiplelabel)

## Type aliases

### Choice

Ƭ **Choice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `Map`<string, any\> |
| `index` | `number` |
| `isFirst` | () => `boolean` |
| `label` | `string` |
| `labels?` | [MultipleLabel](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#multiplelabel) |
| `value` | `string` \| ``null`` |

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:11](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L11)

___

### CompletedChoice

Ƭ **CompletedChoice**: [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice) & { `value`: `string`  }

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:20](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L20)

___

### EmptyChoice

Ƭ **EmptyChoice**: [Choice](../wiki/Module-lib/ChoicesManagement/ChoicesEnumerator#choice) & { `value`: ``null``  }

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:24](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L24)

___

### MultipleLabel

Ƭ **MultipleLabel**: `Object`

#### Index signature

▪ [index: `string`]: `string`

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:4](https://github.com/P0ulpy/Configurateur-OakAddins/blob/74cfff5/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L4)
