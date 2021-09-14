[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / lib/ChoicesManagement/ChoicesEnumerator

# Module: lib/ChoicesManagement/ChoicesEnumerator

## Table of contents

### Classes

- [ChoicesEnumerator](../classes/lib_choicesmanagement_choicesenumerator.choicesenumerator.md)

### Type aliases

- [Choice](lib_choicesmanagement_choicesenumerator.md#choice)
- [CompletedChoice](lib_choicesmanagement_choicesenumerator.md#completedchoice)
- [EmptyChoice](lib_choicesmanagement_choicesenumerator.md#emptychoice)
- [MultipleLabel](lib_choicesmanagement_choicesenumerator.md#multiplelabel)

## Type aliases

### Choice

Ƭ **Choice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `Map`<`string`, `any`\> |
| `index` | `number` |
| `isFirst` | () => `boolean` |
| `isLast` | () => `boolean` |
| `label` | `string` |
| `labels?` | [`MultipleLabel`](lib_choicesmanagement_choicesenumerator.md#multiplelabel) |
| `value` | `string` \| ``null`` |

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:11](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L11)

___

### CompletedChoice

Ƭ **CompletedChoice**: [`Choice`](lib_choicesmanagement_choicesenumerator.md#choice) & { `value`: `string`  }

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:21](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L21)

___

### EmptyChoice

Ƭ **EmptyChoice**: [`Choice`](lib_choicesmanagement_choicesenumerator.md#choice) & { `value`: ``null``  }

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:25](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L25)

___

### MultipleLabel

Ƭ **MultipleLabel**: `Object`

#### Index signature

▪ [index: `string`]: `string`

#### Defined in

[lib/ChoicesManagement/ChoicesEnumerator.ts:4](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/lib/ChoicesManagement/ChoicesEnumerator.ts#L4)
