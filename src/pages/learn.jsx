import { Box, Container, Typography, Paper, Stack, Link, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function Learn() {
    const theme = useTheme();
const items = [
  {
    title: "Array Function in JS",
    subjects: [
      "push(): لإضافة عنصر إلى نهاية المصفوفة.",
      "pop(): لحذف آخر عنصر من المصفوفة.",
      "unshift() / shift(): لإضافة أو حذف عنصر من بداية المصفوفة.",
      "slice(start, end): للحصول على جزء من المصفوفة بدون تعديلها.",
      "splice(start, count, ...items): لحذف أو إضافة عناصر داخل المصفوفة.",
      "forEach(callback): لتنفيذ دالة على كل عنصر في المصفوفة بدون إرجاع قيمة.",
      "map(callback): لإنشاء مصفوفة جديدة تحتوي على نتائج تطبيق دالة على كل عنصر.",
      "filter(callback): لإرجاع مصفوفة جديدة تحتوي فقط على العناصر التي تحقق شرط معين.",
      "find(callback): لإرجاع أول عنصر يحقق الشرط.",
      "includes(value): للتحقق ما إذا كانت المصفوفة تحتوي على قيمة معينة.",
      "reduce(callback, initialValue): لتجميع العناصر في قيمة واحدة (مثل الجمع أو الضرب).",
      "sort() / reverse(): لترتيب أو عكس ترتيب العناصر في المصفوفة."
    ]
  },
  {
    title: "String Function IN JS",
    subjects: [
      "length: ترجع عدد الأحرف في النص.",
      "charAt(index): ترجع الحرف الموجود في موقع معين.",
      "toUpperCase() / toLowerCase(): لتحويل النص إلى أحرف كبيرة أو صغيرة.",
      "indexOf(substring): ترجع موقع أول ظهور لجزء من النص.",
      "includes(substring): تتحقق إذا كان النص يحتوي على كلمة أو حرف.",
      "startsWith(str) / endsWith(str): للتحقق إذا كان النص يبدأ أو ينتهي بكلمة معينة.",
      "slice(start, end): تقطع جزء من النص بين موقعين.",
      "split(separator): تقسم النص إلى مصفوفة من الأجزاء بناءً على فاصل معين.",
      "replace(searchValue, newValue): تستبدل جزء من النص بقيمة جديدة.",
      "trim() / trimStart() / trimEnd(): لإزالة الفراغات الزائدة من بداية أو نهاية النص.",
      "repeat(n): تكرار النص عدد معيّن من المرات."
    ]
  },
  {
    title: "Object Function in JS",
    subjects: [
      "Object.keys(obj): ترجع مصفوفة تحتوي على أسماء المفاتيح في الكائن.",
      "Object.values(obj): ترجع مصفوفة تحتوي على القيم الموجودة داخل الكائن.",
      "Object.entries(obj): ترجع مصفوفة من المصفوفات، كل منها تحتوي على مفتاح وقيمة.",
      "Object.assign(target, ...sources): لدمج خصائص كائنات متعددة في كائن واحد.",
      "Object.freeze(obj): لتجميد الكائن ومنع تعديل خصائصه.",
      "Object.seal(obj): لمنع إضافة خصائص جديدة للكائن، ولكن يسمح بتعديل الخصائص الموجودة.",
      "Object.hasOwnProperty(prop): للتحقق إذا كان الكائن يحتوي على خاصية معينة.",
      "Object.create(proto): لإنشاء كائن جديد مع تحديد الكائن الأصلي الذي يرث منه.",
      "key in obj: تتحقق من وجود خاصية سواء مباشرة أو موروثة.",
      "for...in: تستخدم للتكرار على جميع مفاتيح الكائن.",
      "delete obj.key: لحذف خاصية من الكائن."
    ]
  },
  {
    title: "Map Function in JS",
    subjects: [
      "set(key, value): لإضافة أو تعديل قيمة مرتبطة بمفتاح.",
      "get(key): للحصول على القيمة المرتبطة بمفتاح.",
      "has(key): للتحقق إذا كان المفتاح موجودًا داخل الـ Map.",
      "delete(key): لحذف عنصر معيّن من الـ Map باستخدام المفتاح.",
      "clear(): لحذف جميع العناصر داخل الـ Map.",
      "size: ترجع عدد العناصر داخل الـ Map.",
      "map.keys(): للحصول على جميع مفاتيح ال map.",
      "map.values(): للحصول على حميع قيم ال map.",
      "for...of (map.entries()/map): للمرور على جميع عناصر ال map.",
      "باستخدام map.forEach((value, key) =) للتكرار على كل زوج."
    ]
  },
  {
    title: "Big O Notation",
    subjects: [
      "تساعدني على مقارنة الخوارزميات من حيث السرعة والكفاءة.",
      "تفيد في معرفة تأثير حجم البيانات على الأداء، خاصة في المشاريع الكبيرة.",
      "تركز على الجزء الأهم في الأداء وتتجاهل التفاصيل الدقيقة مثل سرعة المعالج."
    ]
  },
  {
    title: "الأنواع الشائعة من Big O:",
    subjects: [
      "O(1): وقت ثابت، لا يتأثر بحجم البيانات.",
      "O(log n): وقت لوغاريتمي، مثل البحث الثنائي في مصفوفة مرتبة.",
      "O(n): وقت خطي، مثل المرور على كل عنصر في مصفوفة.",
      "O(n log n): وقت لوغاريتمي مضروب في خطي، مثل خوارزميات الفرز السريعة.",
      "O(n^2): وقت تربيعي، مثل خوارزمية الفرز الفقاعي.",
      "O(2^n): وقت أسي، مثل مشكلة فيبوناتشي باستخدام الاستدعاء الذاتي.",
      "O(n!): وقت عاملي، مثل توليد جميع التباديل لعناصر مجموعة."
    ]
  }
];

    return (
       <Container maxWidth="lg" sx={{backgroundColor:theme.palette.background.container, mt:2, p:2,  }}>
          <Typography variant='h3' align='center' sx={{m:10}} >
           What I Learned in Tech Hub
          </Typography>
      <Stack direction="column"
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
          mt: 2,
        }}>
          {items.map((item, index)=>(
            <Paper sx={{ p: 3, width: { sm: '100%', md: '90%', lg: '80%' }, borderRadius: 2 }} key={index}>
                <Typography variant='h4' align='center' >
                    {item.title}
                </Typography>
                <Stack sx={{m:'20px auto'}}>
                {item.subjects.map((title, index)=>(
                    <Typography key={index} >{title}</Typography>
                    ))}
                </Stack>
            </Paper>
          ))}         
      </Stack>
    </Container>
    );
};
