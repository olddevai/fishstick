import React from 'react';
import { TelegramMethod } from '../../types/telegram';
import Input from '../common/Input';
import Button from '../common/Button';
import { Play } from 'lucide-react';

interface MethodFormProps {
  method: TelegramMethod;
  onSubmit: (params: Record<string, any>) => void;
}

export default function MethodForm({ method, onSubmit }: MethodFormProps) {
  const [params, setParams] = React.useState<Record<string, any>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(params);
  };

  const handleParamChange = (name: string, value: string) => {
    setParams(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {method.parameters.map(param => (
        <Input
          key={param.name}
          label={param.name}
          placeholder={param.description}
          required={param.required}
          helper={`Type: ${param.type}`}
          value={params[param.name] || ''}
          onChange={e => handleParamChange(param.name, e.target.value)}
        />
      ))}
      <Button type="submit" icon={Play}>
        Execute Method
      </Button>
    </form>
  );
}