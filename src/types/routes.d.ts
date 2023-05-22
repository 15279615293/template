interface MetaItf{
    title:string;
    icon?:string;
    isShow?:boolean
}
interface RouterItf{
    path:string;
    name:string;
    component?:() => Promise<typeof import("*.vue")>;
    meta:MetaItf;
    children?:{
        path:string;
        name:string
        component:() => Promise<typeof import("*.vue")>;
        meta:MetaItf
    }[]
}