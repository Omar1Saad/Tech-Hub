import TechLogo from '../assets/techHub.png';
import '../styles/learn.css'

export default function Learn() {
    return (
        <>
        <div className="container-learn">
            <main className='main-learn'>
                <section>
                    <h1>What I Learned in Tech Hub</h1>
                </section>
                <article>
                    <h3>Array Function in JS</h3>
                    <ul>
                        <li>push(): لإضافة عنصر إلى نهاية المصفوفة.</li>
                        <li>pop(): لحذف آخر عنصر من المصفوفة.</li>
                        <li>unshift() / shift(): لإضافة أو حذف عنصر من بداية المصفوفة.</li>
                        <li>slice(start, end): للحصول على جزء من المصفوفة بدون تعديلها.</li>
                        <li>splice(start, count, ...items): لحذف أو إضافة عناصر داخل المصفوفة.</li>
                        <li>forEach(callback): لتنفيذ دالة على كل عنصر في المصفوفة بدون إرجاع قيمة.</li>
                        <li>map(callback): لإنشاء مصفوفة جديدة تحتوي على نتائج تطبيق دالة على كل عنصر.</li>
                        <li>filter(callback): لإرجاع مصفوفة جديدة تحتوي فقط على العناصر التي تحقق شرط معين.</li>
                        <li>find(callback): لإرجاع أول عنصر يحقق الشرط.</li>
                        <li>includes(value): للتحقق ما إذا كانت المصفوفة تحتوي على قيمة معينة.</li>
                        <li>reduce(callback, initialValue): لتجميع العناصر في قيمة واحدة (مثل الجمع أو الضرب).</li>
                        <li>sort() / reverse(): لترتيب أو عكس ترتيب العناصر في المصفوفة.</li>
                    </ul>
                </article>
                <article>
                    <h3>String Function IN JS</h3>
                    <ul>
                        <li>length: ترجع عدد الأحرف في النص.</li>
                        <li>charAt(index): ترجع الحرف الموجود في موقع معين.</li>
                        <li>toUpperCase() / toLowerCase(): لتحويل النص إلى أحرف كبيرة أو صغيرة.</li>
                        <li>indexOf(substring): ترجع موقع أول ظهور لجزء من النص.</li>
                        <li>includes(substring): تتحقق إذا كان النص يحتوي على كلمة أو حرف.</li>
                        <li>startsWith(str) / endsWith(str): للتحقق إذا كان النص يبدأ أو ينتهي بكلمة معينة.</li>
                        <li>slice(start, end): تقطع جزء من النص بين موقعين.</li>
                        <li>split(separator): تقسم النص إلى مصفوفة من الأجزاء بناءً على فاصل معين.</li>
                        <li>replace(searchValue, newValue): تستبدل جزء من النص بقيمة جديدة.</li>
                        <li>trim() / trimStart() / trimEnd(): لإزالة الفراغات الزائدة من بداية أو نهاية النص.</li>
                        <li>repeat(n): تكرار النص عدد معيّن من المرات.</li>
                    </ul>
                </article>
                <article>
                    <h3>Object Function in JS</h3>
                    <ul>
                        <li>Object.keys(obj): ترجع مصفوفة تحتوي على أسماء المفاتيح في الكائن.</li>
                        <li>Object.values(obj): ترجع مصفوفة تحتوي على القيم الموجودة داخل الكائن.</li>
                        <li>Object.entries(obj): ترجع مصفوفة من المصفوفات، كل منها تحتوي على مفتاح وقيمة.</li>
                        <li>Object.assign(target, ...sources): لدمج خصائص كائنات متعددة في كائن واحد.</li>
                        <li>Object.freeze(obj): لتجميد الكائن ومنع تعديل خصائصه.</li>
                        <li>Object.seal(obj): لمنع إضافة خصائص جديدة للكائن، ولكن يسمح بتعديل الخصائص الموجودة.</li>
                        <li>Object.hasOwnProperty(prop): للتحقق إذا كان الكائن يحتوي على خاصية معينة.</li>
                        <li>Object.create(proto): لإنشاء كائن جديد مع تحديد الكائن الأصلي الذي يرث منه.</li>
                        <li>key in obj: تتحقق من وجود خاصية سواء مباشرة أو موروثة.</li>
                        <li>for...in: تستخدم للتكرار على جميع مفاتيح الكائن.</li>
                        <li>delete obj.key: لحذف خاصية من الكائن.</li>
                    </ul>
                </article>
                <article>
                    <h3>Map Function in JS</h3>
                    <ul>
                        <li>set(key, value): لإضافة أو تعديل قيمة مرتبطة بمفتاح.</li>
                        <li>get(key): للحصول على القيمة المرتبطة بمفتاح.</li>
                        <li>has(key): للتحقق إذا كان المفتاح موجودًا داخل الـ Map.</li>
                        <li>delete(key): لحذف عنصر معيّن من الـ Map باستخدام المفتاح.</li>
                        <li>clear(): لحذف جميع العناصر داخل الـ Map.</li>
                        <li>size: ترجع عدد العناصر داخل الـ Map.</li>
                        <li>map.keys(): للحصول على جميع مفاتيح ال map.</li>
                        <li>map.values(): للحصول على حميع قيم ال map.</li>
                        <li>for...of (map.entries()/map): للمرور على جميع عناصر ال map.</li>
                        <li>باستخدام map.forEach((value, key) =) للتكرار على كل زوج.</li>
                    </ul>
                </article>
                <article>
                    <h3>Big O Notation</h3>
                    <p>أهمية Big O:</p>
                    <ul>
                        <li>تساعدني على مقارنة الخوارزميات من حيث السرعة والكفاءة.</li>
                        <li>تفيد في معرفة تأثير حجم البيانات على الأداء، خاصة في المشاريع الكبيرة.</li>
                        <li>تركز على الجزء الأهم في الأداء وتتجاهل التفاصيل الدقيقة مثل سرعة المعالج.</li>
                    </ul>
                </article>
                <article>
                    <h3>الأنواع الشائعة من Big O:</h3>
                    <ul>
                        <li>O(1): وقت ثابت، لا يتأثر بحجم البيانات.</li>
                        <li>O(log n): وقت لوغاريتمي، مثل البحث الثنائي في مصفوفة مرتبة.</li>
                        <li>O(n): وقت خطي، مثل المرور على كل عنصر في مصفوفة.</li>
                        <li>O(n log n): وقت لوغاريتمي مضروب في خطي، مثل خوارزميات الفرز السريعة.</li>
                        <li>O(n^2): وقت تربيعي، مثل خوارزمية الفرز الفقاعي.</li>
                        <li>O(2^n): وقت أسي، مثل مشكلة فيبوناتشي باستخدام الاستدعاء الذاتي.</li>
                        <li>O(n!): وقت عاملي، مثل توليد جميع التباديل لعناصر مجموعة.</li>
                    </ul>
                </article>
                
            </main>
        </div>
        </>
    );
};
