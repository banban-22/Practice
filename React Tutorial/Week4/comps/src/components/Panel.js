import classNames from 'classnames'

const Panel = ({children, className, ...rest}) => {
const finalsClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full', 
    className
);

return <div {...rest} className={finalsClassNames}>{children}</div>
}

export default Panel;