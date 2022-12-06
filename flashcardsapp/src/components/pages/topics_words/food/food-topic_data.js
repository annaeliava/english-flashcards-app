import AddIcon from '@mui/icons-material/Add';

const food_data = [
    {id: 1, english:'apple', russian:'яблоко', transcription:'/ˈæp.əl/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 2, english:'apricot', russian:'абрикос', transcription:'/ˈeɪ.prɪ.kɒt/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 3, english:'banana', russian:'банан', transcription:'/bəˈnɑː.nə/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 4, english:'blackberry', russian:'ежевика', transcription:'/ˈblæk.bər.i/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 5, english:'blackcurrant', russian:'чёрная смородина', transcription:'/ˌblækˈkʌr.ənt/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 6, english:'cherry', russian:'вишня', transcription:'/ˈtʃer.i/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 7, english:'coconut', russian:'кокос', transcription:'/ˈkəʊ.kə.nʌt/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 8, english:'fig', russian:'инжир', transcription:'/fɪɡ/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 9, english:'grape', russian:'виноград', transcription:'/ɡreɪp/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 10, english:'grapefruit', russian:'грейпфрут', transcription:'/ˈɡreɪp.fruːt/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 11, english:'kiwi', russian:'киви', transcription:'/ˈkiː.wiː/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 12, english:'lemon', russian:'лимон', transcription:'/ˈlem.ən/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 13, english:'lime', russian:'лайм', transcription:'/laɪm/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 14, english:'mango', russian:'манго', transcription:'/ˈmæŋ.ɡəʊ/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 15, english:'melon', russian:'дыня', transcription:'/ˈmel.ən/', topic:'food', deleteOrAddBtn: <AddIcon/>}, 
    {id: 16, english:'orange', russian:'апельсин', transcription:'/ˈɒr.ɪndʒ/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 17, english:'peach', russian:'перс ик', transcription:'/piːtʃ/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 18, english:'pineapple', russian:'ананас', transcription:'/ˈpaɪnˌæp.əl/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 19, english:'plum', russian:'слива', transcription:'/plʌm/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 20, english:'pomegranate', russian:'гранат', transcription:'/ˈpɒm.ɪˌɡræn.ɪt/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 21, english:'strawberry', russian:'клубника', transcription:'/ˈstrɔː.bər.i/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 22, english:'fruit', russian:'фрукты', transcription:'/fruːt/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 23, english:'fish', russian:'рыба', transcription:'/fɪʃ', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 24, english:'salmon', russian:'лосось', transcription:'/ˈsæm.ən/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 25, english:'anchovy', russian:'анчоус', transcription:'/ˈæn.tʃə.vi/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 26, english:'tuna', russian:'тунец', transcription:'/ˈtʃuː.nə/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 27, english:'meat', russian:'мясо', transcription:'/miːt/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 28, english:'beef', russian:'говядина', transcription:'/biːf/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 29, english:'bacon', russian:'бекон', transcription:'/ˈbeɪ.kən/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 30, english:'chicken', russian:'курица', transcription:'/ˈtʃɪk.ɪn/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 31, english:'ham', russian:'ветчина', transcription:'/hæm/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 32, english:'lamb', russian:'ягнёнок', transcription:'/læm/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 33, english:'sausage', russian:'сосиска', transcription:'/ˈsɒs.ɪdʒ/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 34, english:'pork', russian:'свинина', transcription:'/pɔːk/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 35, english:'turkey', russian:'индейка', transcription:'/ˈtɜː.ki/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 36, english:'veil', russian:'оленина', transcription:'/veɪl/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 37, english:'vegetables', russian:'овощи', transcription:'/ˈvedʒ.tə.bəl/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 38, english:'asparagus', russian:'спаржа', transcription:'/əˈspær.ə.ɡəs/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 39, english:'aubergine', russian:'баклажан', transcription:'/ˈəʊ.bə.ʒiːn/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 40, english:'avocado', russian:'авокадо', transcription:'/ˌæv.əˈkɑː.dəʊ/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 41, english:'cabbage', russian:'капуста', transcription:'/ˈkæb.ɪdʒ/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 42, english:'carrot', russian:'морковка', transcription:'/ˈkær.ət/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 43, english:'cauliflower', russian:'цветная капуста', transcription:'/ˈkɒl.ɪˌflaʊ.ər/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 44, english:'celery', russian:'сельдерея', transcription:'/ˈsel.ər.i/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 45, english:'courgette', russian:'кабачок', transcription:'/kɔːˈʒet/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 46, english:'cucumber', russian:'огурец', transcription:'/ˈkjuː.kʌm.bər/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 47, english:'garlic', russian:'чеснок', transcription:'/ˈɡɑː.lɪk/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 48, english:'ginger', russian:'имбирь', transcription:'/ˈdʒɪn.dʒər/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 49, english:'lettuce', russian:'салат-латук', transcription:'/ˈlet.ɪs/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 50, english:'mushroom', russian:'гриб', transcription:'/ˈmʌʃ.ruːm/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 51, english:'onion', russian:'лук', transcription:'/ˈʌn.jən/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 52, english:'pepper', russian:'перец', transcription:'/ˈpep.ər/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 53, english:'pumpkin', russian:'тыква', transcription:'/ˈpʌmp.kɪn/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 54, english:'ice cream', russian:'морожёное', transcription:'/ˌaɪs ˈkriːm/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 55, english:'soup', russian:'суп', transcription:' /suːp/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 56, english:'milk', russian:'молоко', transcription:'/mɪlk/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 57, english:'butter', russian:'масло', transcription:'/ˈbʌt.ər/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 58, english:'cheese', russian:'сыр', transcription:'/tʃiːz/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 59, english:'egg', russian:'яйцо', transcription:'/eɡ/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 60, english:'bread', russian:'хлеб', transcription:'/bred/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 61, english:'sugar', russian:'сахар', transcription:'/ˈʃʊɡ.ər/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 62, english:'salt', russian:'соль', transcription:'/sɒlt/', topic:'food', deleteOrAddBtn: <AddIcon/>},
    {id: 63, english:'water', russian:'вода', transcription:'/ˈwɔː.tər/', topic:'food', deleteOrAddBtn: <AddIcon/>},
];

export default food_data;