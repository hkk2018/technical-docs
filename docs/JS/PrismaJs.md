## 學習備忘
1. Foreign Key在1-1關係時不用特別加@unique，因為會自動生成。[ref](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-one-relations#relational-databases)

2. @relation中references對應的id是別的table的primary key。[ref](https://www.prisma.io/docs/concepts/components/prisma-schema/relations#relations-in-the-database)