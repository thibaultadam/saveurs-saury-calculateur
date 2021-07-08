[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / lib/ChoicesManagement/Choices/ChoiceContainer

# Module: lib/ChoicesManagement/Choices/ChoiceContainer

## Table of contents

### Classes

- [ChoiceContainer](../classes/lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

### Type aliases

- [ChoiceContainerConstructionOptions](lib_choicesmanagement_choices_choicecontainer.md#choicecontainerconstructionoptions)
- [ChoiceContainerConstructor](lib_choicesmanagement_choices_choicecontainer.md#choicecontainerconstructor)
- [ContainerCreationCallback](lib_choicesmanagement_choices_choicecontainer.md#containercreationcallback)

## Type aliases

### ChoiceContainerConstructionOptions

Ƭ **ChoiceContainerConstructionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `choicesManager` | [`ChoicesManager`](../classes/lib_choicesmanagement_choicesmanager.choicesmanager.md) |
| `containersCreation` | [`ContainerCreationCallback`](lib_choicesmanagement_choices_choicecontainer.md#containercreationcallback)[] |
| `id` | `number` |
| `type` | `string` |

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:20](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L20)

___

### ChoiceContainerConstructor

Ƭ **ChoiceContainerConstructor**: (`constructionOptions`: [`ChoiceContainerConstructionOptions`](lib_choicesmanagement_choices_choicecontainer.md#choicecontainerconstructionoptions), ...`buildArgs`: `any`[]) => [`ChoiceContainer`](../classes/lib_choicesmanagement_choices_choicecontainer.choicecontainer.md)

#### Type declaration

• (`constructionOptions`, ...`buildArgs`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [`ChoiceContainerConstructionOptions`](lib_choicesmanagement_choices_choicecontainer.md#choicecontainerconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:15](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L15)

___

### ContainerCreationCallback

Ƭ **ContainerCreationCallback**: (`type`: `string`, ...`args`: `any`[]) => `HTMLElement`

#### Type declaration

▸ (`type`, ...`args`): `HTMLElement`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

##### Returns

`HTMLElement`

HTMLElement

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/48879bc/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L13)
