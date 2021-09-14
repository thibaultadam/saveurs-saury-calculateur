[calculateur-oakaddins](../README.md) / [Exports](../modules.md) / OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator

# Module: OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator

## Table of contents

### Classes

- [ButtonChoiceDesignCreator](../classes/oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.buttonchoicedesigncreator.md)

### Type aliases

- [ButtonChoiceDesignCreatorOptions](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#buttonchoicedesigncreatoroptions)
- [ChoiceDesignElements](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#choicedesignelements)
- [Product](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#product)
- [ProductLine](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#productline)
- [ProductLineValue](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#productlinevalue)

## Type aliases

### ButtonChoiceDesignCreatorOptions

Ƭ **ButtonChoiceDesignCreatorOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `configurator` | [`OakAddinsConfigurateur`](../classes/oakaddins_code_oakaddinsconfigurateur.oakaddinsconfigurateur.md) |

#### Defined in

[OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts:29](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts#L29)

___

### ChoiceDesignElements

Ƭ **ChoiceDesignElements**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `container` | `HTMLElement` |
| `next` | `HTMLElement` |
| `prev` | `HTMLElement` |

#### Defined in

[OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts:23](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts#L23)

___

### Product

Ƭ **Product**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cat` | [`ProductLine`](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#productline)[] |
| `image?` | `string` |
| `infos?` | `string` |
| `productsKeys` | `string`[] |
| `title` | `string` |

#### Defined in

[OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts:14](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts#L14)

___

### ProductLine

Ƭ **ProductLine**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `values` | [`ProductLineValue`](oakaddins_code_choicesmanager_choicetools_buttonchoicedesigncreator.md#productlinevalue)[] |

#### Defined in

[OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts:9](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts#L9)

___

### ProductLineValue

Ƭ **ProductLineValue**: `string` \| `string`[]

#### Defined in

[OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts:7](https://github.com/P0ulpy/Configurateur-OakAddins/blob/6c35e95/src/OakAddins/Code/ChoicesManager/ChoiceTools/ButtonChoiceDesignCreator.ts#L7)
