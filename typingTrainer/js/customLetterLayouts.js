export function grabIntersection(keyboard, row, hand)
{
    let intersection = ''
    const all_keys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
    if (keyboard == 'QWERTY')
    {
        if (row == 'middle')
        {
            if (hand == 'right')
            {
                intersection = ['h','j','k','l',';']
            }
            else if (hand == 'left')
            {
                intersection = ['a','s','d','f','g']
            }
            else
            {
                intersection = ['a','s','d','f','g','h','j','k','l',';']
            }
        }
        else
        {
            if (hand == 'right')
            {
                intersection = ['y','u','i','o','p','h','j','k','l',';','b','n','m',',','.']
            }
            else if (hand == 'left')
            {
                intersection = ['q','w','e','r','t','a','s','d','f','g','z','x','c','v','b']
            }
            else
            {
                intersection = all_keys
            }
        }
        
    }


    else if (keyboard == 'DVORAK')
    {
        if (row == 'middle')
        {
            if (hand == 'right')
            {
                intersection = ['d','h','t','n','s']
            }
            else if (hand == 'left')
            {
                intersection = ['a','o','e','u','i']
            }
            else
            {
                intersection = ['a','o','e','u','i','d','h','t','n','s']
            }
        }
        else
        {
            if (hand == 'right')
            {
                intersection = ['f','g','c','r','l','d','h','t','n','s','x','b','m','w','v','z']
            }
            else if (hand == 'left')
            {
                intersection = ["'", ',','.','p','y','a','o','e','u','i',';','q','j','k','x']
            }
            else
            {
                intersection = all_keys
            }
        }

    }


    else
    {
        if (row == 'middle')
        {
            if (hand == 'right')
            {
                intersection = ['h','n','e','i','o',"'"]
            }
            else if (hand == 'left')
            {
                intersection = ['a','r','s','t','d']
            }
            else
            {
                intersection = ['a','r','s','t','d','h','n','e','i','o',"'"]
            }
        }
        else
        {
            if (hand == 'right')
            {
                intersection = ['j','l','u','y',';','h','n','e','i','o',"'",'k','m',',','.']
            }
            else if (hand == 'left')
            {
                intersection = ['q','w','f','p','g','a','r','s','t','d','z','x','c','v','b']
            }
            else
            {
                intersection = all_keys
            }
        }
    }
    return intersection
}